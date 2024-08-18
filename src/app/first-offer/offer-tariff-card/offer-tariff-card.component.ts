import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-offer-tariff-card',
  templateUrl: './offer-tariff-card.component.html',
  styleUrls: ['./offer-tariff-card.component.scss'],
})
export class OfferTariffCardComponent implements OnInit {
  public price: string = '430 ₽/год';
  isMonth: boolean = false;

  @Output() toggleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  toggle() {
    this.isMonth = !this.isMonth;
    this.price = this.isMonth ? '690 ₽/месяц' : '430 ₽/год';
    this.toggleChange.emit(this.isMonth);
  }
  toggleMonth(): void {
    if (!this.isMonth) {
      this.isMonth = true;
      this.price = '690 ₽/месяц';
      this.toggleChange.emit(this.isMonth);
    }
  }
  toggleYear(): void {
    if (this.isMonth) {
      this.isMonth = false;
      this.price = '430 ₽/год';
      this.toggleChange.emit(this.isMonth);
    }
  }

  ngOnInit(): void {}
}
