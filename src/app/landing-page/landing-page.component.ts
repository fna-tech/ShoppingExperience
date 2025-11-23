import { Component, inject, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { MainContentComponent } from '../main-content/main-content.component';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, MainContentComponent, NavigationComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
