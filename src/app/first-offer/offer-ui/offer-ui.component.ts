import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer-ui',
  templateUrl: './offer-ui.component.html',
  styleUrls: ['./offer-ui.component.scss']
})
export class OfferUiComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
  }
  tariffBtnText: string = 'Попробовать 14 дней бесплатно';

  onToggleChange(isMonth: boolean): void {
    this.tariffBtnText = isMonth ? 'Попробовать 14 дней бесплатно' : 'Попробовать 7 дней бесплатно';
  }
}
