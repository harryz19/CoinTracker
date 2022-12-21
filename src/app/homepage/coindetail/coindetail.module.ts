import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoindetailPageRoutingModule } from './coindetail-routing.module';

import { CoindetailPage } from './coindetail.page';

import { NgChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoindetailPageRoutingModule,
    NgChartsModule
  ],
  declarations: [CoindetailPage]
})
export class CoindetailPageModule {}
