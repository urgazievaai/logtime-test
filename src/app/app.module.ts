import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OfferUiComponent } from './first-offer/offer-ui/offer-ui.component';
import { OfferButtonsComponent } from './first-offer/offer-buttons/offer-buttons.component';
import { OfferTariffCardComponent } from './first-offer/offer-tariff-card/offer-tariff-card.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
@NgModule({
  declarations: [
    AppComponent,
    OfferUiComponent,
    OfferButtonsComponent,
    OfferTariffCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
