import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { ApiEntry } from '../../api';

@Component({
  selector: 'as-app-list-item, [as-app-list-item]',
  templateUrl: './app-list-item.component.html',
  styleUrls: ['./app-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppListItemComponent {

  @Input() rank: number;

  @Input() roundIcon: boolean;

  @Input() app: ApiEntry;

}
