import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepagePage } from './homepage.page';

const routes: Routes = [
  {
    path: '',
    component: HomepagePage,
    children: [
      {
        path: 'coinslist',
        loadChildren: () => import('./coinslist/coinslist.module').then( m => m.CoinslistPageModule)
      },
      {
        path: 'watchlist',
        loadChildren: () => import('./watchlist/watchlist.module').then( m => m.WatchlistPageModule)
      },
      {
        path: 'news',
        loadChildren: () => import('./news/news.module').then( m => m.NewsPageModule)
      },
      {
        path: '',
        redirectTo: '/coinslist',
        pathMatch: 'full'
      },
      {
        path: 'coindetail/:id',
        loadChildren: () => import('./coindetail/coindetail.module').then( m => m.CoindetailPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/coinslist',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomepagePageRoutingModule {}
