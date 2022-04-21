import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrequentlyAskedQuestionsPage } from './frequently-asked-questions.page';

const routes: Routes = [
  {
    path: '',
    component: FrequentlyAskedQuestionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrequentlyAskedQuestionsPageRoutingModule {}
