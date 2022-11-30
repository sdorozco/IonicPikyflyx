import { Component, OnInit } from '@angular/core';
import { ShowDialogService } from "../../servicios/sweetalert";
import { DatabaseService } from "../../servicios/database.service";
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})
export class InicioSesionPage implements OnInit {
  usuario:string="diana@gmail.com";
  password:string="123456";
  constructor(private sweet: ShowDialogService,private route : Router, private auth : AuthService) { }

  ngOnInit() {
  }
  login(){
    if(this.usuario == null || this.password == null || this.usuario == "" || this.password == ""){
      this.sweet.showSweetInfo("Campos Vacios","Los campos no deben quedar vacios");
    }else{
      this.auth.login(this.usuario,this.password,this.sweet)
      //this.database.ValidateUser(this.usuario,this.password)
    }
  }
  registro(){
    this.route.navigateByUrl("registro");
  }
}
