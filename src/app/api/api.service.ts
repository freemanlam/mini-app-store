import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiModule } from './api.module';
import { ApiResponse, ApiEntry } from './api-response';
import { API_SERVER } from './injection-tokens';

@Injectable({
  providedIn: ApiModule
})
export class ApiService {

  constructor(
    private http: HttpClient,
    @Inject(API_SERVER) private apiServer: string
  ) { }

  getRecommendations(limit: number): Observable<ApiEntry[]> {
    return this.http.get<ApiResponse>(`${this.apiServer}topgrossingapplications/limit=${limit}/json`)
      .pipe(map(res => res.feed.entry));
  }

  getTop(limit: number): Observable<ApiEntry[]> {
    return this.http.get<ApiResponse>(`${this.apiServer}topfreeapplications/limit=${limit}/json`)
      .pipe(map(res => res.feed.entry));
  }

}
