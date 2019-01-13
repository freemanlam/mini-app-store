import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';

import { AppListHoriComponent } from './app-list-hori.component';
import { ApiEntry } from '../../api';

@Component({
  selector: 'as-app-list-hori-item, [as-app-list-hori-item]',
  template: ''
})
class MockItemComponent {
  @Input() app: ApiEntry;
}

@Component({
  selector: 'as-app-list-hori-item-ghost',
  template: ''
})
class MockItemGhostComponent { }

describe('AppListHoriComponent', () => {

  let component: AppListHoriComponent;
  let fixture: ComponentFixture<AppListHoriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppListHoriComponent,
        MockItemComponent,
        MockItemGhostComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppListHoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
