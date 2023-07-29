import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { OfferFormTypes } from 'src/app/components/offer-form/offer-form.types';
import { UserService } from '../user/user.service';
import { Offer, OfferRequest } from './offer.types';
import { endpoints } from '../endpoints';

@Injectable({
  providedIn: 'root',
})
export class OfferService {
  constructor(private http: HttpClient, private userService: UserService) {}
  private handleError(error: any) {
    console.error(error);
    return throwError(() => new Error(error));
  }

  getOffers() {
    return this.http
      .get<Offer[]>(endpoints.OFFERS)
      .pipe(tap(), catchError(this.handleError));
  }

  getOfferDetails() {}

  createOffer(formValues: OfferFormTypes): Observable<any> {
    const userId = this.userService.getUserId();

    const request: OfferRequest = {
      title: formValues.title,
      description: formValues.description,
      expirationDate: formValues.expirationDate,
      userId,
    };
    return this.http.post(endpoints.OFFER, request);
  }

  editOffer() {}
}
