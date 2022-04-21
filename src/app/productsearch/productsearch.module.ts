import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductsearchPageRoutingModule } from './productsearch-routing.module';

import { ProductsearchPage } from './productsearch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsearchPageRoutingModule
  ],
  declarations: [ProductsearchPage]
})
export class ProductsearchPageModule {}
