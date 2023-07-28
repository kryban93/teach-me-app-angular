import { OfferFormTypes } from 'src/app/components/offer-form/offer-form.types';

export interface OfferRequest extends OfferFormTypes {
  userId: string;
}
