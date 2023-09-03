import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ranjith_angular_tutorial';
  titles:any=[]
  addTitle(){
    this.titles.push(this.title)
    this.title=''
    console.log(this.titles)
  }
  disableHeading = false
}
