import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor() {}

  public handleError(error: any) {
    console.error(error);
    throw throwError(() => new Error(error));
  }
}
