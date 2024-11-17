import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tour2PageRoutingModule } from './tour-2-routing.module';

import { Tour2Page } from './tour-2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tour2PageRoutingModule
  ],
  declarations: [Tour2Page]
})
export class Tour2PageModule {}
