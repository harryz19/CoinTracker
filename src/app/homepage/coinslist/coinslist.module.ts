import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { CoinslistPageRoutingModule } from './coinslist-routing.module';
import { CoinslistPage } from './coinslist.page';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoinslistPageRoutingModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatSelectModule, 
    MatToolbarModule, 
    MatTableModule, 
    MatPaginatorModule, 
    MatSortModule],
  declarations: [CoinslistPage]
})
export class CoinslistPageModule {}
