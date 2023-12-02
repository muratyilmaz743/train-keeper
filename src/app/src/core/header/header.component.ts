import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'train-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isMobile = signal(false);

  toggleMenu() {
    this.isMobile.set(true);
  }

  closeMobileMenu() {
    this.isMobile.set(false);
  }
}
