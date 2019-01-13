import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'as-app-list-item-ghost',
  templateUrl: './app-list-item-ghost.component.html',
  styleUrls: ['./app-list-item.component.scss', '../app-list-item-ghost-animation.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppListItemGhostComponent {

  @Input() rank: number;

  @Input() roundIcon: boolean;

}
