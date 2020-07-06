import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News, NewsResponse } from '../../model/news'
import { NewsService } from "../../services/news.service";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';

@Component({
  selector: 'newsList',
  templateUrl:'./news.component.html',
  providers: [NewsService]
 
})
export class NewsComponent implements OnInit {
  test2: NewsResponse;
  oneNews: News;
  nesList: News[];
  section: string;

  constructor(private _newsService: NewsService, private activatedroute: ActivatedRoute) {
  }


  ngOnInit() {
    this.activatedroute.queryParams.subscribe(params => {
      this.section = params['section'];
      console.log(this.section);
      this._newsService.getNewsBySection(this.section).subscribe((data) => this.test2 = (data));
    });

    
    //this.nesList = this.test2[0].results;
  }

}
