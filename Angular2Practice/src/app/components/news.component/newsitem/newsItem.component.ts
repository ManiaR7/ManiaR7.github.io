import { Component,OnInit, Input } from '@angular/core';

import { News, NewsResponse } from '../../../model/news'

@Component({
  selector: 'newsitem',
  templateUrl: './newsItem.component.html',
  styleUrls: ['./newsItem.component.css']
  
})
export class NewsItemComponent implements OnInit{
  test: News[];
  test2: NewsResponse[]
  
  @Input()
  newsItem: News;

  @Input()
  id: number;

  constructor() {
    //this.test = ["Abc", "bbac"];
  }
  ngOnInit() {
  
    this.test = [ {
      "section": "Health",
      "subsection": "",
      "title": "Juul Says Its Focus Was Smokers, but It Targeted Young Nonsmokers",
      "abstract": "The company planted the seeds of a public health crisis by marketing to a generation with low smoking rates, and it ignored evidence that teenagers were using its products.",
      "url": "https://www.nytimes.com/2019/11/23/health/juul-vaping-crisis.html",
      "byline": "By JULIE CRESWELL and SHEILA KAPLAN",
      "item_type": "Article",
      "updated_date": "2019-11-23T13:10:49-05:00",
      "created_date": "2019-11-23T05:00:27-05:00",
      "published_date": "2019-11-23T05:00:27-05:00",
      "material_type_facet": "",
      "kicker": "",
      "des_facet": [
        "E-Cigarettes",
        "Smoking and Tobacco",
        "Teenagers and Adolescence",
        "Addiction (Psychology)",
        "Nicotine",
        "Youth",
        "Advertising and Marketing",
        "your-feed-healthcare"
      ],
      "org_facet": [
        "Juul Labs Inc",
        "Altria Group Inc",
        "Japan Tobacco",
        "Centers for Disease Control and Prevention",
        "Food and Drug Administration"
      ],
      "per_facet": [
        "James Monsees",
        "Adam Bowen"
      ],
      "geo_facet": [],
      "multimedia": [
        {
          "url": "https://static01.nyt.com/images/2019/11/24/science/24JUUL-RISEFALL1/00JUUL-RISEFALL1-thumbStandard.jpg",
          "format": "Standard Thumbnail",
          "height": 75,
          "width": 75,
          "type": "image",
          "subtype": "photo",
          "caption": "",
          "copyright": "Jeenah Moon for The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2019/11/24/science/24JUUL-RISEFALL1/00JUUL-RISEFALL1-thumbLarge.jpg",
          "format": "thumbLarge",
          "height": 150,
          "width": 150,
          "type": "image",
          "subtype": "photo",
          "caption": "",
          "copyright": "Jeenah Moon for The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2019/11/24/science/24JUUL-RISEFALL1/00JUUL-RISEFALL1-articleInline.jpg",
          "format": "Normal",
          "height": 127,
          "width": 190,
          "type": "image",
          "subtype": "photo",
          "caption": "",
          "copyright": "Jeenah Moon for The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2019/11/24/science/24JUUL-RISEFALL1/00JUUL-RISEFALL1-mediumThreeByTwo210.jpg",
          "format": "mediumThreeByTwo210",
          "height": 140,
          "width": 210,
          "type": "image",
          "subtype": "photo",
          "caption": "",
          "copyright": "Jeenah Moon for The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2019/11/24/science/24JUUL-RISEFALL1/00JUUL-RISEFALL1-superJumbo.jpg",
          "format": "superJumbo",
          "height": 1367,
          "width": 2048,
          "type": "image",
          "subtype": "photo",
          "caption": "",
          "copyright": "Jeenah Moon for The New York Times"
        }
      ],
      "short_url": "https://nyti.ms/2KNq1Rs"
    }]
    //this.newsItem = this.test[0];
  }
}
