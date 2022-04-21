import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddProductOfferPage } from './add-product-offer.page';

const routes: Routes = [
  {
    path: '',
    component: AddProductOfferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddProductOfferPageRoutingModule {}
