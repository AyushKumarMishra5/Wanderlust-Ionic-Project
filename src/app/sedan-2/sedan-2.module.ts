import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Sedan2PageRoutingModule } from './sedan-2-routing.module';

import { Sedan2Page } from './sedan-2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sedan2PageRoutingModule
  ],
  declarations: [Sedan2Page]
})
export class Sedan2PageModule {}
