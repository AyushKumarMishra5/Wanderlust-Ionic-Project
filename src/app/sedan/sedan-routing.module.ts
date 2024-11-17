import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SedanPage } from './sedan.page';

const routes: Routes = [
  {
    path: '',
    component: SedanPage
  },
  {
    path: 'sedan-2',
    loadChildren: () => import('../sedan-2/sedan-2.module').then( m => m.Sedan2PageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SedanPageRoutingModule {}
