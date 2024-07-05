import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MuayThaiKidsPageRoutingModule } from './muay-thai-kids-routing.module';

import { MuayThaiKidsPage } from './muay-thai-kids.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MuayThaiKidsPageRoutingModule
  ],
  declarations: [MuayThaiKidsPage]
})
export class MuayThaiKidsPageModule {}
