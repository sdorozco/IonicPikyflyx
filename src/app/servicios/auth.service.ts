import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { Storage } from '@ionic/storage';
import { user } from '../share/user';
import { ShowDialogService } from './sweetalert';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLogged : any = false;
  constructor(private AFauth: AngularFireAuth, private router: Router,
    private storage : Storage) {
     AFauth.authState.subscribe(user =>{
     if(user != null || user != undefined){
       console.log(user.uid)
      this.storage.set("id",user.uid)
      this.isLogged = user
     }
   })
  }
  login(email:string,password:string,sweet : ShowDialogService){
      this.AFauth.signInWithEmailAndPassword(email,password).then(user =>{
        sweet.showLogin()
      }).catch(err => console.log(err));
  }
  logout(){
    this.AFauth.signOut().then(res =>{
      console.log("sesión cerrada");
      this.router.navigate(["/inicio-sesion"])
    });
  }
}
