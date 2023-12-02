import { Component } from '@angular/core';

@Component({
  selector: 'tracker-add-day',
  standalone: true,
  imports: [],
  template: `<button
    class="text-pink-500 bg-transparent border border-solid border-pink-500 hover:bg-pink-500 hover:text-white active:bg-pink-600 font-bold uppercase px-4 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 "
    type="button"
  >
    +
  </button>`,
  styleUrl: './add-day.component.css',
})
export class AddDayComponent {}
