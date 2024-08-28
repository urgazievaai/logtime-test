import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OfferTariffCardComponent } from '../offer-tariff-card/offer-tariff-card.component';
import { OfferButtonsComponent } from '../offer-buttons/offer-buttons.component';

@Component({
  selector: 'app-offer-ui',
  standalone: true,
  imports: [
    CommonModule,
    OfferTariffCardComponent,
    OfferButtonsComponent
  ],
  templateUrl: './offer-ui.component.html',
  styleUrls: ['./offer-ui.component.scss']
})
export class OfferUiComponent {
 
  constructor() { }

  ngOnInit(): void {
  }
  tariffBtnText: string = 'Попробовать 14 дней бесплатно';

  onToggleChange(isMonth: boolean): void {
    this.tariffBtnText = isMonth ? 'Попробовать 14 дней бесплатно' : 'Попробовать 7 дней бесплатно';
  }
}
