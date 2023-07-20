import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  public buttonText = '';
  public routerLink = '';

  ngOnChanges() {
    console.log(this.routerLink);
  }

  @Input() isLink: boolean;
  @Input() variant: 'primary' | 'secondary';

  @Input()
  set link(temp: string) {
    this.routerLink = temp;
  }
  get temp(): string {
    return this.routerLink;
  }

  @Input()
  set text(name: string) {
    this.buttonText = name.toUpperCase();
  }
  get name(): string {
    return this.buttonText;
  }

  @Input() type: string = 'button';
  @Output() btnClick = new EventEmitter();
  @Input() isDisabled = false;

  constructor() {}

  onClick() {
    this.btnClick.emit();
  }
}
