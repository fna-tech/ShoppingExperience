import { CommonModule, NgFor, NgForOf } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-practice',
  standalone: true,
  imports: [NgFor, ReactiveFormsModule, FormsModule, FilterPipe, NgForOf],
  templateUrl: './practice.component.html',
  styleUrl: './practice.component.css'
})
export class PracticeComponent implements OnInit {
 

  searchTerm = ''
  @ViewChild("form1", {static:true}) templateForm: any;
  formReactive: FormGroup | any;

  ngOnInit(): void {
    this.formReactive = new FormGroup ({
      'userName' : new FormControl(null, [Validators.required]),
      'password' : new FormControl(null, [Validators.required])
    }
    )
  }
   


  fruits = ['apple', 'orange', 'banana', 'avacado']

  updateFruits(){
    this.fruits.push('apricot');
    this.fruits = this.fruits.slice();

  }

  submitForm(formInput: any): void {
    console.log(formInput);
    this.templateForm.reset();
  }

  submitReactiveForm(): void {
    console.log(this.formReactive)
    this.formReactive.setValue({'userName':'', 'password' : ''})
  }

}
