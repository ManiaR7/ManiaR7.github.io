import { Injectable, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {CoursesModel } from './courses'

@Injectable() 
export class CousesService {


  constructor(private _http: Http) {
  }

  getCourses(): Observable<CoursesModel[]> {
    return this._http.get("https://jsonplaceholder.typicode.com/todos").map((response: Response) => {
      const data = <CoursesModel[]>response.json();
      console.log(data);
      return data;
    }
    );
  }

  getCourses1() {
    return this._http.get("https://jsonplaceholder.typicode.com/todos").map((response: Response) => {
      const data = response.json();
      console.log(data);
      return data;
    }
    );
  }


  getCourses2(): Observable<CoursesModel[]>  {
    return this._http.get("https://jsonplaceholder.typicode.com/todos").map((response: Response) => <CoursesModel[]>response.json());
  }

  getCourse(code : number): Observable<CoursesModel> {
    return this._http.get("https://jsonplaceholder.typicode.com/todos/"+code.toString()).map((response: Response) => <CoursesModel>response.json());
  }
  getAuthors() {
    return ["Author1", "Author2", "Author3"];
  }

  //getCourses(): string[] {
  //  return ["Course1", "Course2", "Course3"];
  //}
}
