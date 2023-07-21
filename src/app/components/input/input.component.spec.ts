import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputComponent],
    });
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display valid input with label', () => {
    component.name = 'test';
    component.label = 'text';
    component.placeholder = 'placeholder';
    component.type = 'text';
    const input = document.querySelector('.input__wrapper');
    console.log(input);

    expect(input).toBeTruthy();
  });
});
