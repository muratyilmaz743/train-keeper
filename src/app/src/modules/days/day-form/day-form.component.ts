import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ModalService } from '../../../shared/modal/modal.service';

@Component({
  selector: 'tracker-day-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './day-form.component.html',
  styleUrl: './day-form.component.css',
  providers: [ModalService],
})
export class DayFormComponent {
  constructor() {}

  dayName = new FormControl('');
}
