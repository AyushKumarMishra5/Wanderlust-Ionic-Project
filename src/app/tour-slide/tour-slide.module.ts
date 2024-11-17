import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TourSlidePageRoutingModule } from './tour-slide-routing.module';

import { TourSlidePage } from './tour-slide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TourSlidePageRoutingModule
  ],
  declarations: [TourSlidePage]
})
export class TourSlidePageModule {}
