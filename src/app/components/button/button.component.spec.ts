import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonComponent],
    });
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have set secondary variant', () => {
    component.variant = 'secondary';
    component.buttonText = 'text';
    const button = document.getElementsByClassName('.button--secondary');
    console.log(button);
    expect(button).toBeTruthy();
  });

  it('should render anchor element when it is and link, with proper href', () => {
    component.routerLink = 'test';
    const anchor = document.querySelector('a');

    expect(component.routerLink).toBe('test');
    expect(anchor).toBeTruthy();
  });
});
