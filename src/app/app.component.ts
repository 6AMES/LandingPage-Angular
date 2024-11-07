import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  scrollToElement(): void {
    const element = document.getElementById('empezar');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}