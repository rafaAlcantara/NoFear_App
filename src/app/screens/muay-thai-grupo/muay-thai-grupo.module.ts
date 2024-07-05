import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MuayThaiGrupoPageRoutingModule } from './muay-thai-grupo-routing.module';

import { MuayThaiGrupoPage } from './muay-thai-grupo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MuayThaiGrupoPageRoutingModule
  ],
  declarations: [MuayThaiGrupoPage]
})
export class MuayThaiGrupoPageModule {}
