import { Pipe, PipeTransform } from '@angular/core';

import { ApiEntry } from '../api';

@Pipe({
  name: 'appIcon',
  pure: true
})
export class AppIconPipe implements PipeTransform {

  transform(app: ApiEntry): string {
    return !!app ? app['im:image'][1].label : '';
  }

}
