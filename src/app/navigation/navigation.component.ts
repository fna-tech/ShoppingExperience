import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {

  list_items = ['TVs & Videos', 'Camera, Photo & Video', 'Cell Phones & Accessories',
    'Video Games', 'Headphones', 'luetooth & wireless speaker', 'Car Electronics', 'Computer & Laptops',
    'Home Audio & Theater', 'Musical Instruments'
  ]

  item_clicked(item: string): void {
    console.log(item)

  }

}
