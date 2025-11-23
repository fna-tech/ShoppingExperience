import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { count, debounceTime, distinct, elementAt, filter, first, from, interval, last, max, min, Observable, of, reduce, scan, skip, take, takeLast, takeWhile } from 'rxjs';

@Component({
  selector: 'app-rxjs-practice',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './rxjs-practice.component.html',
  styleUrl: './rxjs-practice.component.css'
})
export class RxjsPracticeComponent implements OnInit{

  searchForm!: FormGroup;


  newNameList = ['Ram', 'Sita', 'Lila', 'Leela', 'Sita'];

  newList$: Observable<string[]> = of(this.newNameList);

  newListstr$: Observable<string> = from(this.newNameList);

  numList: number[] = [1, 34, 32, 12, 34, 66, 11, 34, 8, 234, 234, 1];

  numList$ : Observable<number> = from(this.numList);



  ngOnInit(): void {


    this.searchForm = new FormGroup({
      'name' : new FormControl('')
    })

    this.readValues();
    // this.newList$ = new Observable(
    //   function(observer){
    //     try{
    //       observer.next('Ram');
    //       observer.next('Leela');
    //       observer.next('Sita');

    //     }catch(e){
    //       observer.error(e);

    //     }

    //   }
    // );

    // this.newListstr$
    // .pipe(
    //   distinct(), 
    //   skip(1),
    //   count()
    // )
    // .subscribe({
    //   next: (v) => {
    //     console.log(v)
    //   },
    //   error: (e) => console.log(e),
    //   complete: ()=> console.log('call completed')
    // });

    this.numList$.pipe(
      // count(),
      // min(),
      // max(),
      scan((acc, val) => {
        console.log('acc ' + acc);
        console.log('val ' + val);
        return acc + val
      })

    ). subscribe(data => {
      console.log(data);
    })
      
      const int$ = interval(2000);


      // int$.subscribe(int => {
      //   if (int < 5) {
      //     console.log('from int');
      //   this.newListstr$.subscribe(v => {
      //     console.log('from from operator');
        
      //     console.log(int + ' ' + v);
      //     console.log(v)})

      //   }
        

      // })

  }

  readValues(): void {

    this.searchForm.get('name')?.valueChanges
    .pipe(
      takeWhile((v) => this.condition(v)),
      // debounceTime(3000),
      filter(value => this.filterdValue(value))
    ).subscribe(value => {
      console.log(value);
      
    })
  }

  condition(v: any) {
    return (v.length < 5) ? true : false;
  }

  filterdValue(inputValue: string): boolean {
    return inputValue.includes('l') ? true : false

  }
}


