import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthTokenService } from 'src/app/services/auth-token/auth-token.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  constructor(
    private authService: AuthService,
    private authTokenService: AuthTokenService
  ) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  submit() {
    console.log('submit login');
    this.authService.login(this.formGroup.value).subscribe({
      next: (data) => {
        this.authTokenService.saveToken(data);
      },
    });
  }
}
