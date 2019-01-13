import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ApiService } from './api.service';
import { API_SERVER } from './injection-tokens';

const testServer = '/';

function generateMockResponse(limit: number) {
  return {
    feed: {
      entry: Array(limit)
    }
  };
}

describe('ApiService', () => {

  let service: ApiService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        ApiService,
        {
          provide: API_SERVER,
          useValue: testServer
        }
      ]
    });
    service = TestBed.get(ApiService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get top apps', done => {
    const limit = 5;
    service.getTop(5)
      .subscribe(apps => {
        expect(apps.length).toEqual(5);
        done();
      });

    httpMock.expectOne(`${testServer}topfreeapplications/limit=${limit}/json`)
      .flush(generateMockResponse(5));
  });

  it('should get recommendation apps', done => {
    const limit = 5;
    service.getRecommendations(5)
      .subscribe(apps => {
        expect(apps.length).toEqual(5);
        done();
      });

    httpMock.expectOne(`${testServer}topgrossingapplications/limit=${limit}/json`)
      .flush(generateMockResponse(5));
  });

  afterEach(() => {
    httpMock.verify();
  });

});
