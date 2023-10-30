import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'multiplyer'
})
export class MultiplyerPipe implements PipeTransform {

  transform(value: number, multiplyer: number): number {
    return value * multiplyer;
  }

}
