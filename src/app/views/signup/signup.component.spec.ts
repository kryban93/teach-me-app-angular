import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupComponent } from './signup.component';
import { InputComponent } from 'src/app/components/input/input.component';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ValidationErrorsComponent } from 'src/app/components/validation-errors/validation-errors.component';
import { AuthService } from 'src/app/services/auth/auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SignupComponent,
        InputComponent,
        ButtonComponent,
        ValidationErrorsComponent,
      ],
      imports: [ReactiveFormsModule, FormsModule, HttpClientTestingModule],
      providers: [AuthService],
    });
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should properly display signup component', () => {
    const signupForm =
      fixture.debugElement.nativeElement.querySelector('.form__wrapper');

    console.log(signupForm);
  });
});
