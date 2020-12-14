import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})

export class FilterPipe implements PipeTransform {
  transform(items: any[], args: any, searchText?: string | null ): any {
    return !searchText ?
      items.filter(item => item[args] === true) :
      items.filter(item => item[args] === searchText) ;
  }
}
