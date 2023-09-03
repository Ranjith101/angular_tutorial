import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
 cars:any=[] //input moodule is used to pass data from parent to child component
carData(carsdata:any){
    this.cars = carsdata;
}
}
