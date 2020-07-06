import { Component,Input,OnChanges,SimpleChanges } from '@angular/core';


@Component({
  selector: 'simple',
  template:`<span>Your Text : {{changesText}}<span>`

})
export class SimpleChangeComponent implements OnChanges {

  @Input()
  changesText : string

  ngOnChanges(changes: SimpleChanges) {
    for (let propertyName in changes) {
      let change = changes[propertyName];
      let current = change.currentValue;
      let previous = change.previousValue;
      console.log(propertyName+': currentValue = '+current+' previousValue = '+previous);
    }
  }
}
