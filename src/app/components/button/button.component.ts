import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() isLink: boolean;
  @Input() variant: 'primary' | 'secondary';
  @Input() routerLink: string = '';
  @Input() text: string = '';
  @Input() type: string = 'button';
  @Input() isDisabled = false;

  @Output() btnClick = new EventEmitter();

  constructor() {}

  public onClick() {
    console.log('click');
    this.btnClick.emit();
  }
}
