import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(duration: number): string {
    const durationHours = Math.trunc(duration / 60);
    const durationMinutes = duration % 60;
    return (durationHours < 1) ?
      (durationMinutes + 'min') :
      (durationHours + 'h ' + durationMinutes + 'min');
  }
}
