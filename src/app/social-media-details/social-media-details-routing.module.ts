import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SocialMediaDetailsPage } from './social-media-details.page';

const routes: Routes = [
  {
    path: '',
    component: SocialMediaDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SocialMediaDetailsPageRoutingModule {}
