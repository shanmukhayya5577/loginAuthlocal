import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from '../service/service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private guard:ServiceService){}
  canActivate()
  {
    if(this.guard.isValid()){
    window.alert("allow to userdashboard")
    return true
    }else{
      alert("not allow to direct userdashboard & match loginregistration")
      return false
    }
  }
}
