import { Injectable } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NgxsModule, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { skip } from 'rxjs/operators';

import { SearchBarComponent } from './search-bar.component';
import { Search, AppState } from '../state';
import { ApiService } from '../api';

@Injectable()
class MockApiService { }

describe('SearchBarComponent', () => {

  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;
  let store: Store;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        NgxsModule.forRoot([
          AppState
        ])
      ],
      declarations: [
        SearchBarComponent
      ],
      providers: [
        { provide: ApiService, useClass: MockApiService }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.search$ instanceof Observable).toEqual(true);
  });

  it('should get latest search', done => {
    component.search$
      // first time is default state, it should be ''
      .pipe(skip(1))
      .subscribe(search => {
        expect(search).toEqual('test');
        done();
      });

    store.dispatch(new Search('test'));
  });

  it('should success dispatch Search action', done => {
    store.select(AppState.search)
      // first time is default state, it should be ''
      .pipe(skip(1))
      .subscribe(search => {
        expect(search).toEqual('test2');
        done();
      });

    component.search('test2');
  });

});
