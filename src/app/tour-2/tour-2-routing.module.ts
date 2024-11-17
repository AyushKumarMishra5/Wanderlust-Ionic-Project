import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tour2Page } from './tour-2.page';

const routes: Routes = [
  {
    path: '',
    component: Tour2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tour2PageRoutingModule {}
