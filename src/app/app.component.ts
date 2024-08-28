import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OfferUiComponent } from './first-offer/offer-ui/offer-ui.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    OfferUiComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'logtime-test';
}
