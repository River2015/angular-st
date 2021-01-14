import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})

export class FilterPipe implements PipeTransform {
  transform(items: any[], args: any, value: any): any {
    if (!items || !args) {
      return items;
    }
    return items.filter(item => item[args] === true);
  }
}
