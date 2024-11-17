import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'tab2',
    loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
  },
  {
    path: 'hotel-slide',
    loadChildren: () => import('../hotel-slide/hotel-slide.module').then( m => m.HotelSlidePageModule)
  },
  {
    path: 'tour-slide',
    loadChildren: () => import('../tour-slide/tour-slide.module').then( m => m.TourSlidePageModule)
  },
  {
    path: 'sedan-slide',
    loadChildren: () => import('../sedan-slide/sedan-slide.module').then( m => m.SedanSlidePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
