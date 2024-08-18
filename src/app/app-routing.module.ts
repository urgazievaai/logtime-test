import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfferUiComponent } from './first-offer/offer-ui/offer-ui.component';

const routes: Routes = [
  {path: '', component: OfferUiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
