import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MuayThaiGrupoPage } from './muay-thai-grupo.page';

const routes: Routes = [
  {
    path: '',
    component: MuayThaiGrupoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MuayThaiGrupoPageRoutingModule {}
