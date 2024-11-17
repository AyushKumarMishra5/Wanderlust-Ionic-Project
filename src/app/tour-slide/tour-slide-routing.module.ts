import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TourSlidePage } from './tour-slide.page';

const routes: Routes = [
  {
    path: '',
    component: TourSlidePage
  },
  {
    path: 'tour',
    loadChildren: () => import('../tour/tour.module').then( m => m.TourPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TourSlidePageRoutingModule {}
