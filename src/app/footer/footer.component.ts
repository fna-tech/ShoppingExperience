import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { ColoredNumberDirective } from '../colored-number.directive';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgClass, ColoredNumberDirective],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  number: number = 29;
  isClicked: boolean = false;

  isClickedCalled(): void {
    this.isClicked = true;
  }

}
