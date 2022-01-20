import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration', 
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  onSignup(form:NgForm){
  
    localStorage.setItem('username1',form.value.regname)
    localStorage.setItem('password1',form.value.regpass)


  }
  constructor() { }

  ngOnInit(): void {
  }
 
}
