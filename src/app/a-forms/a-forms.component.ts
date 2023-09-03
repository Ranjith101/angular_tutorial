import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-a-forms',
  templateUrl: './a-forms.component.html',
  styleUrls: ['./a-forms.component.scss']
})
export class AFormsComponent implements OnInit {
  countryList:Country[] = [
    new Country('1','India'),
    new Country('2','Russia'),
    new Country('3','Germany'),
    new Country('4','Italy'),
  ]

  contact!:RegForm
  ngOnInit(): void {
   this.contact ={
    name:'Sachin',
    sex:'male',
    country:'India',
    message:"Hi hello",
    newsletter:true,
    address:{
      city:'sriviliiputhur',
      street:'k st',
      pincode:'626125'

    }      
   } 
  }
  onSubmit(form:NgForm){
    console.log(form.value)
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


class RegForm{
  name!:string;
  sex!:string;
  country!:string;
  message!:string;
  newsletter!:boolean;
  address!:{
    city:string;
    street:string;
    pincode:string;
  }
}