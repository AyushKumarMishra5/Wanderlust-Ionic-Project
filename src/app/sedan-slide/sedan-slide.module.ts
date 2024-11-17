import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SedanSlidePageRoutingModule } from './sedan-slide-routing.module';

import { SedanSlidePage } from './sedan-slide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SedanSlidePageRoutingModule
  ],
  declarations: [SedanSlidePage]
})
export class SedanSlidePageModule {}
