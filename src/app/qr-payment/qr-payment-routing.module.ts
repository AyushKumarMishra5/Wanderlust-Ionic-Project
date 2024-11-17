import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrPaymentPage } from './qr-payment.page';

const routes: Routes = [
  {
    path: '',
    component: QrPaymentPage
  },
  {
    path: 'succ',
    loadChildren: () => import('../succ/succ.module').then( m => m.SuccPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrPaymentPageRoutingModule {}
