import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('test something', () => {
  //   const userData = {
  //     username: 'username',
  //     password: 'password',
  //   };
  //   const test = service.login(userData).subscribe((data) => data);
  //   console.log('login response', +test);
  // });
});
