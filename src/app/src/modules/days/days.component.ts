import { Component } from '@angular/core';
import { AddDayComponent } from './add-day/add-day.component';

@Component({
  selector: 'tracker-days',
  standalone: true,
  imports: [AddDayComponent],
  templateUrl: './days.component.html',
  styleUrl: './days.component.css',
})
export class DaysComponent {}
