import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SocialMediaDetailsPageRoutingModule } from './social-media-details-routing.module';

import { SocialMediaDetailsPage } from './social-media-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SocialMediaDetailsPageRoutingModule
  ],
  declarations: [SocialMediaDetailsPage]
})
export class SocialMediaDetailsPageModule {}
