import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ModalService } from '../../../shared/modal/modal.service';

@Component({
  selector: 'tracker-day-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './day-form.component.html',
  styleUrl: './day-form.component.css',
})
export class DayFormComponent {
  constructor() {}

  modalService = inject(ModalService);

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  onSubmit() {
    this.modalService.closeModal();
  }
}
