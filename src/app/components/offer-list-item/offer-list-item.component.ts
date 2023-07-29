import { Component, Input, OnInit } from '@angular/core';
import { OfferService } from 'src/app/services/offer/offer.service';

@Component({
  selector: 'app-offer-list-item',
  templateUrl: './offer-list-item.component.html',
  styleUrls: ['./offer-list-item.component.scss'],
})
export class OfferListItemComponent implements OnInit {
  @Input() offer: any;
  @Input() index: number;

  ngOnInit(): void {
    console.log(this.offer);
  }
}
