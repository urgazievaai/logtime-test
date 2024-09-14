import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OfferTariffCardComponent } from '../../components/offer-tariff-card/offer-tariff-card.component';
import { TariffButtonsComponent } from 'src/app/components/tariff-buttons/tariff-buttons.component';

@Component({
  selector: 'app-offer-ui',
  standalone: true,
  imports: [
    CommonModule,
    OfferTariffCardComponent,
    TariffButtonsComponent,
  ],
  templateUrl: './offer-ui.component.html',
  styleUrls: ['./offer-ui.component.scss']
})
export class OfferUiComponent {

}
