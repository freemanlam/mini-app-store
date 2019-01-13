import { ApiModule } from './api.module';
import { TestBed } from '@angular/core/testing';
import { Injectable, Optional, Inject } from '@angular/core';
import { API_SERVER } from './injection-tokens';
import { ApiService } from './api.service';

const apiServer = 'test';

@Injectable()
class TestInjectable {

  constructor(
    @Optional() @Inject(API_SERVER) public _apiServer: string
  ) { }

}

describe('ApiModule', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApiModule.forRoot(apiServer)
      ],
      providers: [
        TestInjectable
      ]
    });
  });

  it('should config api server for root', () => {
    const testInjectable: TestInjectable = TestBed.get(TestInjectable);
    expect(testInjectable._apiServer).toEqual(apiServer);
  });

  it('should provide ApiService', () => {
    let apiService: ApiService;

    apiService = TestBed.get(ApiService);
    expect(apiService instanceof ApiService).toEqual(true);
  });

});
