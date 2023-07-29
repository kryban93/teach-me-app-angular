import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputComponent } from './input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidationErrorsComponent } from '../validation-errors/validation-errors.component';

describe('InputComponent', () => {
  let component: InputComponent<any>;
  let fixture: ComponentFixture<InputComponent<any>>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputComponent, ValidationErrorsComponent],
      imports: [ReactiveFormsModule, FormsModule],
    });
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set input type to text', () => {
    fixture.detectChanges();
    const input =
      fixture.debugElement.nativeElement.querySelector('input[type="text"]');

    expect(input).toBeTruthy();
  });

  it('should set input type to textarea', () => {
    component.type = 'textarea';
    fixture.detectChanges();
    const input = fixture.debugElement.nativeElement.querySelector('textarea');

    expect(input).toBeTruthy();
  });

  it('should display proper label', () => {
    component.label = 'Label';
    fixture.detectChanges();
    const label =
      fixture.debugElement.nativeElement.querySelector('.input__label');
    expect(label.innerHTML).toBe('Label');
  });

  it('should dispaly proper input value', () => {
    const input = fixture.debugElement.nativeElement.querySelector('.input');
    const text = 'some text value';
    input.value = text;
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.control?.value).toBe(text);
  });
});
