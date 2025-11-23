import { Component, OnInit } from '@angular/core';
import { SharedServicesService } from '../shared-services.service';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent implements OnInit{
  isLoading: boolean = false;

  constructor(private sharedServices: SharedServicesService){}

  list_items = ['TVs & Videos', 'Camera, Photo & Video', 'Cell Phones & Accessories',
    'Video Games', 'Headphones', 'luetooth & wireless speaker', 'Car Electronics', 'Computer & Laptops',
    'Home Audio & Theater', 'Musical Instruments'
  ]
  
  users_list$: any;

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    // this.isLoading = true

    // this.users_list$ = this.sharedServices.getUsers();

    this.sharedServices.getUsers().subscribe(users => {
      console.log(users)
      this.users_list$ = users;
      this.isLoading = false
      

    }, error => {

    }, () => {
      console.log("call completed in component")
    })
  }

}
