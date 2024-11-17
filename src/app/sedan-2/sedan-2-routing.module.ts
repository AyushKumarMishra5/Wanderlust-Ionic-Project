import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sedan2Page } from './sedan-2.page';

const routes: Routes = [
  {
    path: '',
    component: Sedan2Page
  },
  {
    path: 'tab3',
    loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Sedan2PageRoutingModule {}
