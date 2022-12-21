import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomepagePageRoutingModule } from './homepage-routing.module';

import { HomepagePage } from './homepage.page';
import { CoinslistPage } from './coinslist/coinslist.page';
import { WatchlistPage } from './watchlist/watchlist.page';
import { NewsPage } from './news/news.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomepagePageRoutingModule
  ],
  declarations: [HomepagePage]
})
export class HomepagePageModule {}
