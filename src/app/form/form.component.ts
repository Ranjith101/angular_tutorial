import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @Output() carAdded:EventEmitter<string[]>=new EventEmitter
  cars:any=[];
  carnames:any=""
  addCar(){
    this.cars.push(this.carnames)
    this.carnames='';
    this.carAdded.emit(this.cars)
  }
}
