import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddofferEditPage } from './addoffer-edit.page';

const routes: Routes = [
  {
    path: '',
    component: AddofferEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddofferEditPageRoutingModule {}
