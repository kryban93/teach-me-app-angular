import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferFormComponent } from './offer-form.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { InputComponent } from '../input/input.component';
import { ButtonComponent } from '../button/button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidationErrorsComponent } from '../validation-errors/validation-errors.component';

describe('OfferFormComponent', () => {
  let component: OfferFormComponent;
  let fixture: ComponentFixture<OfferFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        OfferFormComponent,
        InputComponent,
        ButtonComponent,
        ValidationErrorsComponent,
      ],
      imports: [HttpClientTestingModule, ReactiveFormsModule],
    });
    fixture = TestBed.createComponent(OfferFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
