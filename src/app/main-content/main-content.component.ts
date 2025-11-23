import { AsyncPipe, CurrencyPipe, NgForOf, NgIf, TitleCasePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { USERS_URL } from '../url-constants';
import { provideHttpClient } from '@angular/common/http';
import { SharedServicesService } from '../shared-services.service';
import { PrefixPipe } from '../prefix.pipe';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [RouterOutlet, CurrencyPipe, AsyncPipe, NgForOf, NgIf, PrefixPipe, TitleCasePipe],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent implements OnInit {

  constructor(private sharedServices: SharedServicesService){}

  users_list$: any;
  isLoading: boolean = false


  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    // this.isLoading = true

    // this.users_list$ = this.sharedServices.getUsers();

    this.sharedServices.getUsers().subscribe({
      next: (users) => {
      console.log(users)
      this.users_list$ = users;
      this.isLoading = false
    }, 
    error : (e) => {
      console.log(e)

    }, 
    complete: () => {
      console.log("call completed in component")
    }})
  }

  openProfile(url_data: string){
    window.open(url_data)
  }

  fruit(){
    console.log('fruit have been clicked')
  }

}
