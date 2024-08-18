import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferButtonsComponent } from './offer-buttons.component';

describe('OfferButtonsComponent', () => {
  let component: OfferButtonsComponent;
  let fixture: ComponentFixture<OfferButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
