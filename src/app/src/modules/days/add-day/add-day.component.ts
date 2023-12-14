import { Component, TemplateRef, inject } from '@angular/core';
import { DayFormComponent } from '../day-form/day-form.component';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../../shared/modal/modal.service';
import { ModalComponent } from '../../../shared/modal/modal.component';

@Component({
  selector: 'tracker-add-day',
  standalone: true,
  imports: [ModalComponent, DayFormComponent, CommonModule],
  templateUrl: './add-day.component.html',
  styleUrl: './add-day.component.css',
  providers: [ModalService],
})
export class AddDayComponent {
  constructor() {}

  modalService = inject(ModalService);

  openModal() {
    this.modalService.openModal();
  }
}
