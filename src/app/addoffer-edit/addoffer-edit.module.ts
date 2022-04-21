import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddofferEditPageRoutingModule } from './addoffer-edit-routing.module';

import { AddofferEditPage } from './addoffer-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddofferEditPageRoutingModule
  ],
  declarations: [AddofferEditPage]
})
export class AddofferEditPageModule {}
