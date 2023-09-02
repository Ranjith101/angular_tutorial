import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  cars:any=[];
  carnames:any=""
  addCar(){
    this.cars.push(this.carnames)
    this.carnames='';
  }
}
