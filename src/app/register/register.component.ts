import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, FormGroupName, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{

  constructor(private router: Router) {}

  form: FormGroup | any;


  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email])
    })
  }

  registerForm() {
    this.form.reset()
    this.router.navigateByUrl('/');
  }

 
  


}
