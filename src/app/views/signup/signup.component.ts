import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  email = new FormControl('', Validators.required);
  name = new FormControl('', Validators.required);
  password = new FormControl('Password', Validators.required);

  submit() {}
}
