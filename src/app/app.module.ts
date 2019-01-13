import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NgxsModule } from '@ngxs/store';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { ApiModule } from './api';
import { AppListModule } from './app-list';
import { AppState } from './state';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    NgxsModule.forRoot([
      AppState
    ], {
        developmentMode: !environment.production
      }),
    InfiniteScrollModule,
    ApiModule.forRoot('https://itunes.apple.com/hk/rss/'),
    AppListModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
