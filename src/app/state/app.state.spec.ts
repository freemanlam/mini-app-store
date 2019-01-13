import { AppState } from './app.state';
import { AppStateModel } from './app.model';
import { ApiEntry } from '../api';

describe('AppState', () => {

  it('should filter apps', () => {
    const state = {
      recommendationApps: [
        {
          'im:name': { label: 'App 1' },
          category: { attributes: { label: 'Game' } },
          'im:artist': { label: 'Company One', attritubes: {} },
          summary: { label: '' }
        },
        {
          'im:name': { label: 'app 2' },
          category: { attributes: { label: 'Productivity' } },
          'im:artist': { label: 'Company Two', attritubes: {} },
          summary: { label: '' }
        }
      ]
    };
    let result: ApiEntry[];

    result = AppState.recommendationApps(state as AppStateModel);
    expect(result.length).toEqual(2);

    result = AppState.recommendationApps({
      ...state,
      search: 'App'
    } as AppStateModel);
    expect(result.length).toEqual(2);

    result = AppState.recommendationApps({
      ...state,
      search: 'App 1'
    } as AppStateModel);
    expect(result.length).toEqual(1);

    result = AppState.recommendationApps({
      ...state,
      search: 'comp'
    } as AppStateModel);
    expect(result.length).toEqual(2);
  });

});
