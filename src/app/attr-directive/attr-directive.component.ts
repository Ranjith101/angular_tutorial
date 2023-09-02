import { Component } from '@angular/core';

@Component({
  selector: 'app-attr-directive',
  templateUrl: './attr-directive.component.html',
  styleUrls: ['./attr-directive.component.scss']
})
export class AttrDirectiveComponent {
  enablered = true;
  big=true
  italic=true
  status='errosr'
  color=''
}
