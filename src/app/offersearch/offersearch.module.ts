import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OffersearchPageRoutingModule } from './offersearch-routing.module';

import { OffersearchPage } from './offersearch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OffersearchPageRoutingModule
  ],
  declarations: [OffersearchPage]
})
export class OffersearchPageModule {}
