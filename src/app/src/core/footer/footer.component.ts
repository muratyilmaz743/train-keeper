import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'train-footer',
  standalone: true,
  template: ` <footer
    class="fixed bottom-0 h-24 w-full bg-black flex items-center justify-center"
  >
    <p
      class="text-gray-700 text-9xl font-bold tracking-[11vw] overflow-hidden "
    >
      tracker
    </p>
  </footer>`,
  styleUrl: './footer.component.css',
  imports: [CommonModule],
})
export class FooterComponent {}
