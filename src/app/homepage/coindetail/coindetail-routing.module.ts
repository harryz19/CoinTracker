import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoindetailPage } from './coindetail.page';

const routes: Routes = [
  {
    path: '',
    component: CoindetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoindetailPageRoutingModule {}
