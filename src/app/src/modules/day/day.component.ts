import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ModalService } from '../../shared/modal/modal.service';
import { ModalComponent } from '../../shared/modal/modal.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'tracker-day',
  standalone: true,
  imports: [ReactiveFormsModule, ModalComponent, RouterModule],
  templateUrl: './day.component.html',
  styleUrl: './day.component.css',
  providers: [ModalService],
})
export class DayComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}
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
