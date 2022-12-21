import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';


@Component({
  selector: 'app-coinslist',
  templateUrl: './coinslist.page.html',
  styleUrls: ['./coinslist.page.scss'],
})
export class CoinslistPage implements OnInit {

  bannerdata : any = [];

  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['symbol', 'current_price', 'price_change_percentage_24h', 'market_cap'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private api: ApiService, private router : Router) { 
  }

  ngOnInit() {
    this.getBannerdata();
    this.getalldata();
  }

  getBannerdata(){
    this.api.gettrendingcurrency("INR").subscribe(res=>{
      console.log(res);
      this.bannerdata = res;
    })
  }

  getalldata(){
    this.api.getcurrency("INR").subscribe(res=>
      {
        console.log(res);
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  gotodetails(row:any){
    this.router.navigate(['homepage/coindetail',row.id])
  }
}
