import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CbookPage } from './cbook.page';

const routes: Routes = [
  {
    path: '',
    component: CbookPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CbookPageRoutingModule {}
