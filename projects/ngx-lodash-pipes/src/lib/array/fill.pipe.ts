import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import { fill } from 'lodash';

@Pipe({
  name: 'fill',
})
export class FillPipe implements PipeTransform {

  transform<T, U> (
    array: U[] | null | undefined,
    value: T,
    start?: number,
    end?: number,
  ): Array<T | U> {
    const array4Fill = [...array];

    return fill(array4Fill, value, start, end);
  }

}