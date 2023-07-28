import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { CategoriesType } from 'src/app/services/categories/categories.types';
import { OfferService } from 'src/app/services/offer/offer.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-offer-form',
  templateUrl: './offer-form.component.html',
  styleUrls: ['./offer-form.component.scss'],
})
export class OfferFormComponent implements OnInit {
  offerFormGroup: FormGroup;
  categories: any;

  constructor(
    private offerService: OfferService,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit() {
    this.categoriesService
      .getCategories()
      .subscribe((data) => (this.categories = data));
    this.offerFormGroup = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl(''),
      expirationDate: new FormControl(''),
    });
  }

  createOffer() {
    console.log(this.offerFormGroup.value);
    this.offerService
      .createOffer(this.offerFormGroup.value)
      .subscribe((data) => {
        console.log(data);
      });
  }
}
