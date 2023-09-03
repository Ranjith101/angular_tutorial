import { Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-sharing-data',
  templateUrl: './sharing-data.component.html',
  styleUrls: ['./sharing-data.component.scss']
})
export class SharingDataComponent implements OnChanges, OnInit, DoCheck, OnDestroy {
  @Input() text:string[] = [];
  nofTitles = 0;
  ngOnChanges(changes: SimpleChanges): void {
    // if(!changes['text'].isFirstChange()){
        // console.log("Changing freak")
        console.log("ngChange works")
    // }

  }
  ngOnInit(): void { //called at initializtion 
      console.log("oninit called")
      this.text.push("Ranjith")
      this.nofTitles=1  
  }

  ngDoCheck(): void {
    if(this.text.length>this.nofTitles){
      console.log("Changing freak")
      console.log('docheck') //do check is used to identify any changes is happening 
      this.nofTitles++
    }

 }

 ngOnDestroy(): void {
  //during cleaning process it will be called
     console.log("Ondestroy")
 }

}
