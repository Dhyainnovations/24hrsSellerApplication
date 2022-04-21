import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowProductImagePageRoutingModule } from './show-product-image-routing.module';

import { ShowProductImagePage } from './show-product-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowProductImagePageRoutingModule
  ],
  declarations: [ShowProductImagePage]
})
export class ShowProductImagePageModule {}
