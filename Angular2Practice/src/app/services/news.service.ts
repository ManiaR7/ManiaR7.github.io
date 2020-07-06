import { Injectable, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { News, NewsResponse, section } from '../model/news'

@Injectable()
export class NewsService {

  constructor(private _http: Http) {
  }
  url: string;

  getNews(): Observable<NewsResponse> {

    this.url = "https://api.nytimes.com/svc/topstories/v2/health.json?api-key=315a5a51483b469a918246dc2753b339";
    return this._http.get(this.url).map((response: Response) => {
      const data = <NewsResponse>response.json();
      console.log(data);
      return data;
    }
    );
  }


  getNewsBySection(sectionName: string): Observable<NewsResponse> {

    this.url = "https://api.nytimes.com/svc/topstories/v2/" + sectionName +".json?api-key=315a5a51483b469a918246dc2753b339";
    return this._http.get(this.url).map((response: Response) => {
      const data = <NewsResponse>response.json();
      console.log(data);
      return data;
    }
    );
  }

  getsections(): Observable<section[]> {
    this.url = "https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=315a5a51483b469a918246dc2753b339";
    return this._http.get(this.url).map((response: Response) => {
      debugger;
      const data = <section[]>response.json()['results'];
      console.log(data);
      return data;
    }
    );
  }

}
