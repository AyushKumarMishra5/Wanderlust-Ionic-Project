import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TourPage } from './tour.page';

const routes: Routes = [
  {
    path: '',
    component: TourPage
  },
  {
    path: 'tour-1',
    loadChildren: () => import('../tour-1/tour-1.module').then( m => m.Tour1PageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TourPageRoutingModule {}
