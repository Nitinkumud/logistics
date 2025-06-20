import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrls:   ['./home.component.css']   // ← note the “s”
})
export class HomeComponent {
  // you don’t actually need an `activeLink` field
  // when you use RouterLinkActive on your anchors
}
