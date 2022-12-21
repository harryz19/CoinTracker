import { Component, OnInit } from '@angular/core';
import { NewsapiService } from 'src/app/service/newsapi.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  cryptonews : any = []
  constructor(private newsapi : NewsapiService) { }

  ngOnInit() {
    this.getnews();
  }

  getnews(){
    this.newsapi.getcryptonews().subscribe(res=>{
      // console.log(res);
      this.cryptonews = res.articles;
      console.log(this.cryptonews)
    })
  }

}
