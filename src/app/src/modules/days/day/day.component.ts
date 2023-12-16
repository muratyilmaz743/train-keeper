import { Component, inject } from '@angular/core';
import { ModalService } from '../../../shared/modal/modal.service';
import { ModalComponent } from '../../../shared/modal/modal.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'tracker-day',
  standalone: true,
  imports: [ReactiveFormsModule, ModalComponent],
  templateUrl: './day.component.html',
  styleUrl: './day.component.css',
  providers: [ModalService],
})
export class DayComponent {
  modal = inject(ModalService);

  addExerciseForm = new FormGroup({
    exerciseName: new FormControl(''),
    sets: new FormControl(0),
    reps: new FormControl(0),
  });

  openModal() {
    this.modal.openModal();
  }
}
