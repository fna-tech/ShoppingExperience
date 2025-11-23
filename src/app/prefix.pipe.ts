import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prefix',
  standalone: true
})
export class PrefixPipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    const result = 'Mr. ' + value;
    
    return result;
  }

}
