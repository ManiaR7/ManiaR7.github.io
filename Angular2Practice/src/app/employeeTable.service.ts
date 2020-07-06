import { Injectable,OnInit } from '@angular/core';
import { IEmployee } from './employee';
import {Http,Response } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class employeeTableService{
  ds: string;
  constructor(private _http: Http) {


  }

  getEmployeeList()/*: Observable<IEmployee[]>*/ {
    //return this._http.get("http://locahost:39498").map((response: Response) => <IEmployee[]>response.json());
  }

}
