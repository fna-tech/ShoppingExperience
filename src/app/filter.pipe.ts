import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(inputList: string[], searchTerm: string): unknown {
    console.log(inputList)
    console.log(searchTerm)
    if (!searchTerm){
      return inputList
    } else {
      return inputList.filter(value => value.startsWith(searchTerm))
    }
  }

}
