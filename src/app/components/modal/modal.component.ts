import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() id: string = '';
  @Input() closeByBackdrop: boolean = true;

  private element: HTMLElement;

  constructor(private modalService: ModalService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    if (!this.id) {
      console.error('modal needs an id');
      return;
    }

    this.modalService.add(this);

    document.body.appendChild(this.element);

    this.element.addEventListener('click', (event: Event) => {
      if (!event.target) {
        return;
      }

      const target = event.target as HTMLElement;
      if (target.className === 'modal__wrapper') {
        this.close();
      }
    });
  }

  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }

  open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('modal__wrapper--open');
  }

  close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('modal__wrapper--open');
  }
}
