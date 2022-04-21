import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyproductEditPageRoutingModule } from './myproduct-edit-routing.module';

import { MyproductEditPage } from './myproduct-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyproductEditPageRoutingModule
  ],
  declarations: [MyproductEditPage]
})
export class MyproductEditPageModule {}
