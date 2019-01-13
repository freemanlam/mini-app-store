import { State, Action, StateContext, Selector } from '@ngxs/store';
import { tap } from 'rxjs/operators';

import { AppStateModel } from './app.model';
import { Search, GetRecommendationApps, GetTopApps, GetMoreTopApps } from './app.actions';
import { ApiService, ApiEntry } from '../api';

function filterApps(search: string, apps: ApiEntry[]) {
  if (typeof search !== 'string' || search.length < 1) {
    return apps;
  }

  search = search.trim().toLowerCase();
  return apps.filter(app =>
    app['im:name'].label.toLowerCase().includes(search)
    || app.category.attributes.label.toLowerCase().includes(search)
    || app['im:artist'].label.toLowerCase().includes(search)
    || app.summary.label.toLowerCase().includes(search)
  );
}

@State<AppStateModel>({
  name: 'app',
  defaults: {
    search: '',
    recommendationApps: [],
    recommendationAppsLoading: true,
    topApps: [],
    topAppsLoading: true,
    appPerPage: 10,
    loaded: 0
  }
})
export class AppState {

  @Selector()
  static search(state: AppStateModel) {
    return state.search;
  }

  @Selector()
  static recommendationApps(state: AppStateModel) {
    return filterApps(state.search, state.recommendationApps);
  }

  @Selector()
  static recommendationAppsLoading(state: AppStateModel) {
    return state.recommendationAppsLoading;
  }

  @Selector()
  static topApps(state: AppStateModel) {
    return filterApps(state.search, state.topApps.slice(0, state.loaded));
  }

  @Selector()
  static topAppsLoading(state: AppStateModel) {
    return state.topAppsLoading;
  }

  constructor(
    private apiService: ApiService
  ) { }

  @Action(Search)
  search(
    { patchState }: StateContext<AppStateModel>,
    { search }: Search
  ) {
    patchState({
      search
    });
  }

  @Action(GetRecommendationApps)
  getRecommendationApps(
    { patchState }: StateContext<AppStateModel>,
    { limit }: GetRecommendationApps
  ) {
    return this.apiService.getRecommendations(limit)
      .pipe(tap(apps => patchState({
        recommendationApps: apps,
        recommendationAppsLoading: false
      })));
  }

  @Action(GetTopApps)
  getTopApps(
    { patchState }: StateContext<AppStateModel>,
    { limit }: GetTopApps
  ) {
    return this.apiService.getTop(limit)
      .pipe(tap(apps => patchState({
        topApps: apps,
        topAppsLoading: false
      })));
  }

  @Action(GetMoreTopApps)
  getModeTopApps(
    { getState, patchState }: StateContext<AppStateModel>
  ) {
    const { loaded, appPerPage } = getState();
    patchState({
      loaded: loaded + appPerPage
    });
  }

}
