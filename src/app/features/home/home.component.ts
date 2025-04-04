import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  activeLink: string = 'services'; // Default active link

  setActive(link: string) {
    this.activeLink = link;
  }
}
