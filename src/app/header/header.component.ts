import { Component, inject, ViewContainerRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LazyLoadedComponent } from '../lazy-loaded/lazy-loaded.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  advancedComponent: any;

  // viewContainerRef = inject(ViewContainerRef);

  async loadComponent() {
    // const{LazyLoadedComponent} = await import('../lazy-loaded/lazy-loaded.component');

    // this.viewContainerRef.createComponent(LazyLoadedComponent);

    this.advancedComponent = await import('../lazy-loaded/lazy-loaded.component').then((c) => c.LazyLoadedComponent);


  }

}
