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

  it('should display valid input with label', () => {
    component.label = 'text';
    component.type = 'text';
    component.inputId = 'test';
    const input = document.querySelector('.input__wrapper');
    console.log(input);

    expect(input).toBeTruthy();
  });
});
