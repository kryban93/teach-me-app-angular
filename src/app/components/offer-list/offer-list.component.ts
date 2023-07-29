import { OfferService } from 'src/app/services/offer/offer.service';
import { Component, OnInit } from '@angular/core';
import { Offer } from 'src/app/services/offer/offer.types';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.scss'],
})
export class OfferListComponent implements OnInit {
  offers: Offer[] = [];

  constructor(private offerService: OfferService) {}

  ngOnInit(): void {
    this.offerService.getOffers().subscribe((data) => {
      console.log(data);
      this.offers = data;
    });
  }
}
