import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
  
})
export class PropertyBindingComponent {
  title = "Raaaaaaammmmmmmmmaaaaiaiiiiiayyyaaa"
  isdisabled = false

  clickfn(){
    alert(123)
  }
}
