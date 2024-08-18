import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferTariffCardComponent } from './offer-tariff-card.component';

describe('OfferTariffCardComponent', () => {
  let component: OfferTariffCardComponent;
  let fixture: ComponentFixture<OfferTariffCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferTariffCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferTariffCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
