import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarbookPage } from './carbook.page';

const routes: Routes = [
  {
    path: '',
    component: CarbookPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarbookPageRoutingModule {}
