import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';

import { AppListComponent } from './app-list.component';
import { ApiEntry } from '../../api';

@Component({
  selector: 'as-app-list-item, [as-app-list-item]',
  template: ''
})
class MockItemComponent {
  @Input() rank: number;
  @Input() roundIcon: boolean;
  @Input() app: ApiEntry;
}

@Component({
  selector: 'as-app-list-item-ghost',
  template: ''
})
class MockItemGhostComponent {
  @Input() rank: number;
  @Input() roundIcon: boolean;
}

describe('AppListComponent', () => {

  let component: AppListComponent;
  let fixture: ComponentFixture<AppListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppListComponent,
        MockItemComponent,
        MockItemGhostComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should provide trackBy index', () => {
    expect(component.trackBy(1, {} as any)).toEqual(1);
    expect(component.trackBy(2, {} as any)).toEqual(2);
  });

});
