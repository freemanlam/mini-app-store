import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { AppListComponent } from '../app-list';

@Component({
  selector: 'as-app-list-hori',
  templateUrl: './app-list-hori.component.html',
  styleUrls: ['./app-list-hori.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppListHoriComponent extends AppListComponent { }
