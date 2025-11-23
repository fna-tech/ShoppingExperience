import { Directive, ElementRef, Input, input, OnInit } from '@angular/core';

@Directive({
  selector: '[appColoredNumber]',
  standalone: true,
  host: {
    '(click)' : 'applyClick()'
  }
})
export class ColoredNumberDirective implements OnInit{

  // private e1: ElementRef | undefined;

  constructor(private e1: ElementRef) {
    // this.e1 = e1;
   }

  @Input() inputNumber = 0;

  ngOnInit(): void {
      console.log(this.inputNumber)
  }

  applyClick(): void {
    if (this.inputNumber % 5 == 0) {
      this.e1.nativeElement.style.color = 'green';
    } else { 
      this.e1.nativeElement.style.color = 'red';
    }
  }



  

}
