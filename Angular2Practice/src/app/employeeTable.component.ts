import { Component, Pipe, OnInit } from '@angular/core'
import { IEmployee } from './employee'
import { SimpleChangeComponent } from './changetracker/simpleChange.component';
import { employeeTableService } from './employeeTable.service'
import { NewsItemComponent } from './components/news.component/newsitem/newsItem.component';

@Component({
  selector: 'employeeTable',
  templateUrl: './employeeTable.component.html',
  styleUrls: ['./employeeTable.component.css'],
  providers: [employeeTableService]
})
export class EmployeeTableComponent implements OnInit{

  employeesTable: IEmployee[];
  constructor(private _employeeList : employeeTableService) {
  }

  ngOnInit() {
    //this._employeeList.getEmployeeList().subscribe(employeeData => this.employeesTable = employeeData);
    this.employeesTable = [
      { name: "Manish", gender: "Male", email: "Manish@tcs.com", DOB: new Date("03/07/2019"), Salary: 5000 },
            { name: "Ritika", gender: "Female", email: "Ritika@lti.com", DOB: new Date("04/27/2019"), Salary: 5000 },
                  { name: "Muusukesh", gender: "Male", email: "mukes@sap.com", DOB: new Date("03/07/2019"), Salary: 5000 }
    ]

  }
  getAllCount(): number{
    return this.employeesTable.length;
  }

  getMaleCount(): number {
    return this.employeesTable.filter(e => e.gender === 'Male').length;
  }

  getFemaleCount(): number {
    return this.employeesTable.filter(e => e.gender === 'Female').length;
  }

  selectedRadioButtonString: string='All';

  selectedRadioButton(select: string) {
    debugger;
    this.selectedRadioButtonString= select;
  }
}

