import { NgIf } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { Form, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  constructor(private router: Router){}

  @ViewChild('myForm', {static: true}) myForm: any;


  formSubmit(data: any){
    this.myForm.reset();
    this.router.navigateByUrl('/')
  }

}
