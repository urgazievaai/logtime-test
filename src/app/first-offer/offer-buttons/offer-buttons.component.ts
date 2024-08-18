import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer-buttons',
  templateUrl: './offer-buttons.component.html',
  styleUrls: ['./offer-buttons.component.scss'],
})
export class OfferButtonsComponent implements OnInit {
  @Input() tariffBtn: string = 'Попробовать 14 дней бесплатно';
  constructor() {}
  ngOnInit(): void {}
}
