import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferListItemComponent } from './offer-list-item.component';

describe('OfferListItemComponent', () => {
  let component: OfferListItemComponent;
  let fixture: ComponentFixture<OfferListItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfferListItemComponent]
    });
    fixture = TestBed.createComponent(OfferListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
