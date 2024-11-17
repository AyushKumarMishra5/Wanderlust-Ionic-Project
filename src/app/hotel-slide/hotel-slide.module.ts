import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotelSlidePageRoutingModule } from './hotel-slide-routing.module';

import { HotelSlidePage } from './hotel-slide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HotelSlidePageRoutingModule
  ],
  declarations: [HotelSlidePage]
})
export class HotelSlidePageModule {}
