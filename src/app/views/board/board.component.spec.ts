import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardComponent } from './board.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OfferFormComponent } from 'src/app/components/offer-form/offer-form.component';
import { InputComponent } from 'src/app/components/input/input.component';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { ValidationErrorsComponent } from 'src/app/components/validation-errors/validation-errors.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        BoardComponent,
        OfferFormComponent,
        InputComponent,
        ButtonComponent,
        ValidationErrorsComponent,
      ],
      imports: [HttpClientTestingModule, ReactiveFormsModule],
    });
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
