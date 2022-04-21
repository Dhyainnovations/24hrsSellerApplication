import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OffersearchPage } from './offersearch.page';

const routes: Routes = [
  {
    path: '',
    component: OffersearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OffersearchPageRoutingModule {}
