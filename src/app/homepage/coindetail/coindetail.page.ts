import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

import {ChartConfiguration, ChartType} from 'chart.js';
import {BaseChartDirective} from 'ng2-charts';

@Component({
  selector: 'app-coindetail',
  templateUrl: './coindetail.page.html',
  styleUrls: ['./coindetail.page.scss'],
})
export class CoindetailPage implements OnInit {

  coindata: any;
  coinid:string;
  days: number = 1;
  currency: string = "INR";

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [],
        label: `Price Trends`,
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: '#009688',
        pointBackgroundColor: '#009688',
        pointBorderColor: '#009688',
        pointHoverBackgroundColor: '#009688',
        pointHoverBorderColor: '#009688',

      }
    ],
    labels: []
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      point: {
        radius: 1
      }
    },

    plugins: {
      legend: { display: true },
    }
  };

  public lineChartType: ChartType = 'line';
  @ViewChild(BaseChartDirective) myLineChart : BaseChartDirective;

  constructor(private api : ApiService, private activatedroute : ActivatedRoute) { }

  ngOnInit() {
    this.activatedroute.params.subscribe(val=>{
      this.coinid= val['id']});
    this.getcoindata();
    this.getGraphData(this.days);
  }

  getcoindata(){
    this.api.getcurrencybyid(this.coinid)
    .subscribe(res=>{
      this.coindata = res;
      console.log(this.coindata);
    })
  }

  getGraphData(days:number){
    this.days = days
    this.api.getgraphicalcurrencydata(this.coinid,this.currency,this.days)
    .subscribe(res=>{
      // console.log(res);
      setTimeout(() => {
        this.myLineChart.chart?.update();
      }, 200);
      this.lineChartData.datasets[0].data = res.prices.map((a:any)=>{
        return a[1];
      });
      this.lineChartData.labels = res.prices.map((a:any)=>{
        let date = new Date(a[0]);
        let time = date.getHours() > 12 ?
        `${date.getHours() - 12}: ${date.getMinutes()} PM` :
        `${date.getHours()}: ${date.getMinutes()} AM`
        return this.days === 1 ? time : date.toLocaleDateString();
      })
    })
  }

}
