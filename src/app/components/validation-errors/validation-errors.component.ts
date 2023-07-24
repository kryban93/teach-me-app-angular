import { Component, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-validation-errors',
  templateUrl: './validation-errors.component.html',
  styleUrls: ['./validation-errors.component.scss'],
})
export class ValidationErrorsComponent implements OnInit {
  @Input() errors: Record<string, ValidationErrors> | null = {};

  ngOnInit(): void {
    console.log(this.errors);
  }

  errorMessages: Record<string, string> = {
    required: 'This value is required',
    email: 'This is not proper email',
    minLength: 'Should countain at least 8 letters',
    pattern: 'Should have at least one number and capital letter',
  };
}
