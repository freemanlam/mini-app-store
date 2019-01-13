import { Pipe, PipeTransform } from '@angular/core';

import { ApiEntry } from '../api';

@Pipe({
  name: 'appName',
  pure: true
})
export class AppNamePipe implements PipeTransform {

  transform(app: ApiEntry): string {
    return !!app ? app['im:name'].label : '';
  }

}
