import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent {
  count = 0
  count1 = 0
  onClick(){
    this.count++
    if(this.count>10){
      this.count=0;
    }
  }

  value = ''
  value1 = ''
  handleInput(event:any){
    this.value= (event.target as HTMLInputElement).value //HTMLInputElement to get type from inputbox
  }


}
