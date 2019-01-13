import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material';

import { AppIconModule } from '../app-icon';
import { AppListComponent } from './app-list';
import { AppListHoriComponent } from './app-list-hori/app-list-hori.component';
import { AppListItemComponent, AppListItemGhostComponent } from './app-list-item';
import { AppListHoriItemComponent, AppListHoriItemGhostComponent } from './app-list-hori-item';
import { AppIconPipe } from './app-icon.pipe';
import { AppNamePipe } from './app-name.pipe';

@NgModule({
  imports: [
    CommonModule,
    MatRippleModule,
    AppIconModule
  ],
  declarations: [
    AppListComponent,
    AppListHoriComponent,
    AppListItemComponent,
    AppListItemGhostComponent,
    AppListHoriItemComponent,
    AppListHoriItemGhostComponent,
    AppIconPipe,
    AppNamePipe
  ],
  exports: [
    AppListComponent,
    AppListHoriComponent
  ]
})
export class AppListModule { }
