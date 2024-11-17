import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SedanPageRoutingModule } from './sedan-routing.module';

import { SedanPage } from './sedan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SedanPageRoutingModule
  ],
  declarations: [SedanPage]
})
export class SedanPageModule {}
