import { Component } from '@angular/core';
import { AddDayComponent } from './add-day/add-day.component';
import { DayComponent } from './day/day.component';

@Component({
  selector: 'tracker-days',
  standalone: true,
  imports: [AddDayComponent, DayComponent],
  templateUrl: './days.component.html',
  styleUrl: './days.component.css',
})
export class DaysComponent {}
