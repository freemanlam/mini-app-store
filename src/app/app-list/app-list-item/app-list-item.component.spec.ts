import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppIconComponent } from '../../app-icon';
import { AppListItemComponent } from './app-list-item.component';
import { AppIconPipe } from '../app-icon.pipe';
import { AppNamePipe } from '../app-name.pipe';

describe('AppListItemComponent', () => {
  let component: AppListItemComponent;
  let fixture: ComponentFixture<AppListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppIconComponent,
        AppListItemComponent,
        AppIconPipe,
        AppNamePipe
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
