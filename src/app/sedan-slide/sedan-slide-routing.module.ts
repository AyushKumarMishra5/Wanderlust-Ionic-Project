import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SedanSlidePage } from './sedan-slide.page';

const routes: Routes = [
  {
    path: '',
    component: SedanSlidePage
  },
  {
    path: 'sedan',
    loadChildren: () => import('../sedan/sedan.module').then( m => m.SedanPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SedanSlidePageRoutingModule {}
