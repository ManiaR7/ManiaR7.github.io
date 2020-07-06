import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'employeeList',
  templateUrl: './employeeList.component.html'
})
export class EmployeeListComponent{
  selectedRadioButton:string = 'All';

  @Input()
  all: number = 0;

  @Input()
  male: number = 0;

  @Input()
  female: number = 0;


  @Output()
  countRadioButtonChange: EventEmitter<string> = new EventEmitter<string>();

  onRadioButtonChanged() {
    this.countRadioButtonChange.emit(this.selectedRadioButton);
  }


}
