import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngxs/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AppState, GetRecommendationApps, GetTopApps, GetMoreTopApps } from './state';
import { ApiEntry } from './api';

@Component({
  selector: 'as-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  recommendations: ApiEntry[];
  recommendationsLoading: boolean;
  tops: ApiEntry[];
  topsLoading: boolean;

  private destroy$ = new Subject<void>();

  constructor(
    private store: Store
  ) { }

  ngOnInit() {
    this.store.select(AppState.recommendationApps)
      .pipe(takeUntil(this.destroy$))
      .subscribe(apps => this.recommendations = apps);
    this.store.select(AppState.recommendationAppsLoading)
      .pipe(takeUntil(this.destroy$))
      .subscribe(loading => this.recommendationsLoading = loading);

    this.store.select(AppState.topApps)
      .pipe(takeUntil(this.destroy$))
      .subscribe(apps => this.tops = apps);
    this.store.select(AppState.topAppsLoading)
      .pipe(takeUntil(this.destroy$))
      .subscribe(loading => this.topsLoading = loading);

    this.store.dispatch(new GetRecommendationApps(10));
    this.store.dispatch(new GetTopApps(100))
      .subscribe(() => this.loadMoreApps());
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

  loadMoreApps() {
    this.store.dispatch(new GetMoreTopApps());
  }

}
