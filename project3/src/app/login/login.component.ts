import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  onSubmit(form:NgForm){
    console.log(form.value)
    localStorage.setItem('username',form.value.uname)
    localStorage.setItem('password',form.value.pass )

  }

  constructor() { }

  ngOnInit(): void {
  }

}
