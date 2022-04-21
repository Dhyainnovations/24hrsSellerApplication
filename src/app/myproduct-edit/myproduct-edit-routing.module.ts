import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyproductEditPage } from './myproduct-edit.page';

const routes: Routes = [
  {
    path: '',
    component: MyproductEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyproductEditPageRoutingModule {}
