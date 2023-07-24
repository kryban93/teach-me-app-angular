import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { InputComponent } from 'src/app/components/input/input.component';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidationErrorsComponent } from 'src/app/components/validation-errors/validation-errors.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginComponent,
        InputComponent,
        ButtonComponent,
        ValidationErrorsComponent,
      ],
      imports: [ReactiveFormsModule, FormsModule],
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('');
});
