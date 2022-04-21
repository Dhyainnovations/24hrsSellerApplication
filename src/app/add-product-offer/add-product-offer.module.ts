import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddProductOfferPageRoutingModule } from './add-product-offer-routing.module';

import { AddProductOfferPage } from './add-product-offer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddProductOfferPageRoutingModule
  ],
  declarations: [AddProductOfferPage]
})
export class AddProductOfferPageModule {}
