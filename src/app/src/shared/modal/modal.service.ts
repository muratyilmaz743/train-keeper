import { Injectable, signal } from '@angular/core';

@Injectable()
export class ModalService {
  display = signal(false);
  constructor() {}

  openModal() {
    this.display.set(true);
  }
  closeModal() {
    this.display.set(false);
  }
}
