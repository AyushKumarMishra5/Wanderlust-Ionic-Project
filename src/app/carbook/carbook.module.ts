import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarbookPageRoutingModule } from './carbook-routing.module';

import { CarbookPage } from './carbook.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarbookPageRoutingModule
  ],
  declarations: [CarbookPage]
})
export class CarbookPageModule {}
