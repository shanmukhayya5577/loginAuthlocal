import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  isValid(){
    let a=localStorage.getItem("username")
    let b=localStorage.getItem("password")
    let c=localStorage.getItem("username1")
    let d=localStorage.getItem("password1")
    if(a===c && b===d && a!=null && b!=null && c!=null && d!=null ){
      return true
    }else{
      return false
    }
  }

  constructor() { }
}
