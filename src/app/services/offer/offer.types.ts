import { OfferFormTypes } from 'src/app/components/offer-form/offer-form.types';

export interface OfferRequest extends OfferFormTypes {
  userId: string;
}

export interface Offer {
  title: string;
  description: string;
  expirationDate: string;
  created: string;
  userId: string;
}
