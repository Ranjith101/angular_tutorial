import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss'],
})
export class MyComponentComponent {
  name = 'Ranjith';
  color = 'red'
  GetName(){
    return this.name
  }

  getLargestNum(a:Number,b:Number){
    if(a>b){
      return a 
    }else{
      return b
    }
    // return Math.max.apply 
  }
}
