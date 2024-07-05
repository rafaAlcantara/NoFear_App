import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MuayThaiKidsPage } from './muay-thai-kids.page';

const routes: Routes = [
  {
    path: '',
    component: MuayThaiKidsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MuayThaiKidsPageRoutingModule {}
