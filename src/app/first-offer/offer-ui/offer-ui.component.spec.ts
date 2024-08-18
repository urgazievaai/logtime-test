import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferUiComponent } from './offer-ui.component';

describe('OfferUiComponent', () => {
  let component: OfferUiComponent;
  let fixture: ComponentFixture<OfferUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
