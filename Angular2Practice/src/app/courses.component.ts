import { Component, OnInit } from '@angular/core';
import { CousesService } from './couses.service';
import { AuthorsService } from './authors.service';
import { CoursesModel } from './courses';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  providers: [CousesService, AuthorsService],
})
export class CoursesComponent implements OnInit{
  title = "THis is the title for Courses";
  authorTitle = "This Title is for Authors";
  courses: CoursesModel[];
  authors: string[];

  constructor(public coursesService: CousesService, public authorsService: AuthorsService) {
 
  }

  ngOnInit() {
    this.coursesService.getCourses2().subscribe((data) => this.courses = (data));
    this.authors = this.authorsService.getAuthors();


   // this.courses = [{ "one": 1, "two": 2 }];
  }
}
