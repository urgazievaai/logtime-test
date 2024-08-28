import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-offer-buttons',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './offer-buttons.component.html',
  styleUrls: ['./offer-buttons.component.scss'],
})
export class OfferButtonsComponent {
  @Input() tariffBtn: string = 'Попробовать 14 дней бесплатно';
  constructor() {}
  ngOnInit(): void {}
}
