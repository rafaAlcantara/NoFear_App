import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MuayThaiPersonalPageRoutingModule } from './muay-thai-personal-routing.module';

import { MuayThaiPersonalPage } from './muay-thai-personal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MuayThaiPersonalPageRoutingModule
  ],
  declarations: [MuayThaiPersonalPage]
})
export class MuayThaiPersonalPageModule {}
