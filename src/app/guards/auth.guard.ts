import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ShowDialogService } from "../servicios/sweetalert";
import { Router } from "@angular/router";
import { Storage } from "@ionic/storage";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private sweet:ShowDialogService,private router: Router,private storage: Storage){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.storage.get("id").then(res=>{
        if(res == null){
          this.router.navigate(["/inicio-sesion"])
          return false
        }else{
          return true
        }
      })
  }
}