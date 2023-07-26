import { Injectable } from '@angular/core';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { Maybe } from 'src/app/helpers/types';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modals: ModalComponent[] = [];

  constructor() {}

  public add(modal: ModalComponent): void {
    if (!modal.id || this.findModal(modal.id)) {
      throw new Error('modal must have a unique id attribute');
    }
    this.modals.push(modal);
  }

  public remove(id: string): void {
    this.modals = this.modals.filter((modal) => modal.id !== id);
  }

  public open(id: string): void {
    const modal = this.findModal(id);
    if (!modal) {
      return;
    }

    modal.open();
  }

  public close(id: string) {
    const modal = this.findModal(id);
    if (!modal) {
      return;
    }
    modal.close();
  }

  private findModal(id: string): Maybe<ModalComponent> {
    return this.modals.find((x) => x.id === id) || null;
  }
}
