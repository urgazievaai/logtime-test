import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-offer-tariff-card',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './offer-tariff-card.component.html',
  styleUrls: ['./offer-tariff-card.component.scss'],
})
export class OfferTariffCardComponent {

  @Input() public price!: string
  @Input() isMonth!: boolean

  @Output() toggleChange = new EventEmitter<boolean>();
   
  toggleMonth () {
    this.toggleChange.emit(true)
  }
  toggleYear () {
    this.toggleChange.emit(false)
  }
}
