import { Component, OnInit } from '@angular/core'
import { NewsService } from '../../services/news.service'
import { section } from '../../model/news'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';



@Component({
  selector: 'section',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css'],
  providers:[NewsService]
})
export class SectionsComponent implements OnInit {

  sectionList: section[]
  constructor(private _newsService : NewsService) {
  }
  ngOnInit() {
    this._newsService.getsections().subscribe((data) => this.sectionList = (data));
  }

}

