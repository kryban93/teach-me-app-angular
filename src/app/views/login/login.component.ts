import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthTokenService } from 'src/app/services/auth-token/auth-token.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LoginResponseData } from 'src/app/services/auth/auth.types';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  constructor(
    private authService: AuthService,
    private authTokenService: AuthTokenService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  submit() {
    this.authService.login(this.formGroup.value).subscribe({
      next: (data: LoginResponseData) => {
        this.authTokenService.saveToken(data);
        this.userService.setUser(data.user);
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        throw Error(error);
      },
    });
  }
}
