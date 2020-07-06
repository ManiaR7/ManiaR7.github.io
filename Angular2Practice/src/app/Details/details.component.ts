import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CoursesModel } from '../courses';
import { CousesService } from '../couses.service';

@Component({
  templateUrl: './details.component.html',
  providers:[CousesService]
})
export class DetailsComponent implements OnInit{
  code: number;
  Course: CoursesModel;
  constructor(private _activateRoute: ActivatedRoute, private _coursesService: CousesService , private _router: Router ) {
  }

  ngOnInit(){
    this.code = this._activateRoute.snapshot.params['str'];
    this._coursesService.getCourse(this.code).subscribe(
      (data) => { this.Course = (data) });
  }

  onBackButtonClick(){
      this._router.navigate(['/courses']);  
  }
}
