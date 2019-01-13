import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { ApiEntry } from '../../api';

@Component({
  selector: 'as-app-list, as-app-list-vert',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppListComponent {

  @Input() loading: boolean;

  @Input() apps: ApiEntry;

  ghosts = Array(10);

  trackBy(index: number, item: ApiEntry) {
    return index;
  }

}
