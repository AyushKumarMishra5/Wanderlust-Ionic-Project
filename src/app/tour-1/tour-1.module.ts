import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tour1PageRoutingModule } from './tour-1-routing.module';

import { Tour1Page } from './tour-1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tour1PageRoutingModule
  ],
  declarations: [Tour1Page]
})
export class Tour1PageModule {}
