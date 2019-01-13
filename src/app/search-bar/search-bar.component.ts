import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { AppState, Search } from '../state';

@Component({
  selector: 'as-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBarComponent {

  @Select(AppState.search) search$: Observable<string>;

  constructor(
    private store: Store
  ) { }

  search(search: string) {
    this.store.dispatch(new Search(search));
  }

}
