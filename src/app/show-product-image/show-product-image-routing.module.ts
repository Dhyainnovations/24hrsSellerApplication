import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowProductImagePage } from './show-product-image.page';

const routes: Routes = [
  {
    path: '',
    component: ShowProductImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowProductImagePageRoutingModule {}
