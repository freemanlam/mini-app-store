import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { API_SERVER } from './injection-tokens';

@NgModule({
  imports: [
    HttpClientModule
  ]
})
export class ApiModule {
  static forRoot(apiServer: string): ModuleWithProviders {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: API_SERVER,
          useValue: apiServer
        }
      ]
    };
  }
}
