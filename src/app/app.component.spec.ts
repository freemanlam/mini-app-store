import { NO_ERRORS_SCHEMA, Injectable } from '@angular/core';
import { TestBed, async, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { NgxsModule } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { AppComponent } from './app.component';
import { ApiEntry, ApiService } from './api';
import { AppState } from './state';


@Injectable()
class MockApiService {

  getRecommendations(limit: number): Observable<ApiEntry[]> {
    return of(new Array(limit))
      .pipe(delay(1));
  }

  getTop(limit: number): Observable<ApiEntry[]> {
    return of(new Array(limit))
      .pipe(delay(1));
  }

}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NgxsModule.forRoot([
          AppState
        ])
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        {
          provide: ApiService,
          useClass: MockApiService
        }
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  describe('after created', () => {
    let fixture: ComponentFixture<AppComponent>;
    let app: AppComponent;

    beforeEach(() => {
      fixture = TestBed.createComponent(AppComponent);
      app = fixture.debugElement.componentInstance;
    });

    it('should subscribe states and request data', fakeAsync(() => {
      fixture.detectChanges(); // ngOnInit

      expect(app.recommendationsLoading).toEqual(true);
      expect(app.topsLoading).toEqual(true);

      tick(1);

      expect(app.recommendations.length).toEqual(10);
      expect(app.tops.length).toEqual(10);
    }));

    it('should get more apps', fakeAsync(() => {
      fixture.detectChanges(); // ngOnInit

      tick(1);
      expect(app.tops.length).toEqual(10);

      app.loadMoreApps();
      expect(app.tops.length).toEqual(20);
    }));

  });

});
