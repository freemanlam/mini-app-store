import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppIconComponent } from '../../app-icon';
import { AppListHoriItemComponent } from './app-list-hori-item.component';
import { AppIconPipe } from '../app-icon.pipe';
import { AppNamePipe } from '../app-name.pipe';

describe('AppListHoriItemComponent', () => {
  let component: AppListHoriItemComponent;
  let fixture: ComponentFixture<AppListHoriItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppIconComponent,
        AppListHoriItemComponent,
        AppIconPipe,
        AppNamePipe
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppListHoriItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
