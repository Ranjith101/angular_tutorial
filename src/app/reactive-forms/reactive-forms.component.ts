import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent {
  countryList:Country[] = [
    new Country('1','India'),
    new Country('2','Russia'),
    new Country('3','Germany'),
    new Country('4','Italy'),
  ]

  contactForm = new FormGroup({
  firstName:new FormControl(),
  lastName:new FormControl(),
  email:new FormControl(),
  gender:new FormControl(),
  country:new FormControl(),
  isMarried:new FormControl(),
  address: new FormGroup({
    city:new FormControl,
    street:new FormControl,
    pincode:new FormControl
  })
})
onSubmit(){
  console.log(this.contactForm.value)
}
}
class Country{
  id:String
  name:String

  constructor(id:string,name:string){
    this.id = id
    this.name = name
  }
}