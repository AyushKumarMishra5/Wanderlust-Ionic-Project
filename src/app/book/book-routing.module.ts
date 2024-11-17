import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookPage } from './book.page';

const routes: Routes = [
  {
    path: '',
    component: BookPage
  },
  {
    path: 'dp',
    loadChildren: () => import('../dp/dp.module').then( m => m.DpPageModule)
  },
  {
    path: 'booking',
    loadChildren: () => import('../booking/booking.module').then( m => m.BookingPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookPageRoutingModule {}
