import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CbookPageRoutingModule } from './cbook-routing.module';

import { CbookPage } from './cbook.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CbookPageRoutingModule
  ],
  declarations: [CbookPage]
})
export class CbookPageModule {}
