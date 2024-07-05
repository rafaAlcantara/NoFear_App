import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MuayThaiPersonalPage } from './muay-thai-personal.page';

const routes: Routes = [
  {
    path: '',
    component: MuayThaiPersonalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MuayThaiPersonalPageRoutingModule {}
