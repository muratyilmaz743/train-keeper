import { Component, inject } from '@angular/core';
import { ModalService } from '../../../shared/modal/modal.service';
import { ModalComponent } from '../../../shared/modal/modal.component';

@Component({
  selector: 'tracker-day',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './day.component.html',
  styleUrl: './day.component.css',
  providers: [ModalService],
})
export class DayComponent {
  modal = inject(ModalService);

  openModal() {
    this.modal.openModal();
  }
}
