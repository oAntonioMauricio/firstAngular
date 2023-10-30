import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'capMoreThan4'
})
export class CapMoreThan4Pipe implements PipeTransform {

  transform(value: string, numWords = 4): string {

    let stringArray = value.split(" ");

    for (let i = 0; i < stringArray.length; i++) {
      if (stringArray[i].length >= numWords) {
        stringArray[i] = stringArray[i][0].toUpperCase() + stringArray[i].slice(1);
      }
    }

    return stringArray.join(" ");
  }

}
