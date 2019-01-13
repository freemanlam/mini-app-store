import { ApiEntry } from '../api';

export interface AppStateModel {
  search?: string;
  recommendationApps: ApiEntry[];
  recommendationAppsLoading: boolean;
  topApps: ApiEntry[];
  topAppsLoading: boolean;
  appPerPage: number;
  loaded: number;
}
