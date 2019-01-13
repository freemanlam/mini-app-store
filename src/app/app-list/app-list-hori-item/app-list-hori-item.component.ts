import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { ApiEntry } from '../../api';

@Component({
  selector: 'as-app-list-hori-item, [as-app-list-hori-item]',
  templateUrl: './app-list-hori-item.component.html',
  styleUrls: ['./app-list-hori-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppListHoriItemComponent {

  @Input() app: ApiEntry;

}
