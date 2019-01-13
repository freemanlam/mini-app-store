import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppIconComponent } from './app-icon.component';

describe('AppIconComponent', () => {

  let component: AppIconComponent;
  let fixture: ComponentFixture<AppIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppIconComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should process background image style when assign url to [icon]', () => {
    expect(component.background).toBeUndefined();

    component.icon = 'http://abc.com/def.jpg';
    expect(component.background).toBeDefined();
  });

  it('should have right class', () => {
    const classes = fixture.debugElement.classes;
    expect(classes['as-app-icon']).toEqual(true);
    expect(classes['as-app-icon-round']).toEqual(false);

    component.round = true;
    fixture.detectChanges(); // update host binding

    expect(classes['as-app-icon-round']).toEqual(true);
  });

});
