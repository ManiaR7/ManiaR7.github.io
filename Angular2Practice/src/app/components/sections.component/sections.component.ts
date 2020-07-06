import { Component, OnInit } from '@angular/core'
import { NewsService } from '../../services/news.service'
import { section } from '../../model/news'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import { ROUTER_PROVIDERS } from '@angular/router/src/router_module';
import { Router,CanActivate } from '@angular/router';


@Component({
  selector: 'section',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css'],
  providers:[NewsService,ROUTER_PROVIDERS]
})
export class SectionsComponent implements OnInit {

  sectionList: section[]
  constructor(private _newsService : NewsService,private router:Router) {
  }
  ngOnInit() {
    this._newsService.getsections().subscribe((data) => this.sectionList = (data));
    this.router.navigate(['Sections/News?section=world']);
  }

}

