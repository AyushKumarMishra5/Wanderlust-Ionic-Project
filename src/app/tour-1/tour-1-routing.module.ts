import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tour1Page } from './tour-1.page';

const routes: Routes = [
  {
    path: '',
    component: Tour1Page
  },
  {
    path: 'tour-2',
    loadChildren: () => import('../tour-2/tour-2.module').then( m => m.Tour2PageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tour1PageRoutingModule {}
