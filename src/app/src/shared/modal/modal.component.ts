import {
  Component,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  Output,
  signal,
} from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { ModalService } from './modal.service';

@Component({
  selector: 'tracker-modal',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  constructor(private elementRef: ElementRef) {}

  modalService = inject(ModalService);

  close(): void {
    this.modalService.closeModal();
  }
}
