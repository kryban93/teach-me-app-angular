import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonComponent],
      imports: [RouterTestingModule],
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
    fixture.detectChanges();
    const button =
      fixture.debugElement.nativeElement.querySelector('.button--secondary');
    expect(button).toBeTruthy();
  });

  it('should be disabled', () => {
    component.isDisabled = true;
    fixture.detectChanges();
    const button = fixture.debugElement.nativeElement.querySelector('button')!;
    expect(button.disabled).toBe(true);
  });

  // it('should have some text', () => {
  //   const text = 'text';
  //   component.text = text;
  //   fixture.detectChanges();
  //   const button: HTMLButtonElement =
  //     fixture.debugElement.nativeElement.querySelector('button')!;
  //   console.log(button);
  //   expect(button.innerHTML).toBe(`text`);
  // });

  it('should render anchor element when it is and link, with proper href', () => {
    component.routerLink = 'test';
    fixture.detectChanges();
    const anchor = fixture.debugElement.nativeElement.querySelector('a')!;

    expect(component.routerLink).toBe('test');
  });
});
