import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrequentlyAskedQuestionsPageRoutingModule } from './frequently-asked-questions-routing.module';

import { FrequentlyAskedQuestionsPage } from './frequently-asked-questions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrequentlyAskedQuestionsPageRoutingModule
  ],
  declarations: [FrequentlyAskedQuestionsPage]
})
export class FrequentlyAskedQuestionsPageModule {}
