import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from "@angular/router";
import { MenuController } from '@ionic/angular';
import { DatabaseService } from './servicios/database.service';
import { ShowDialogService } from "./servicios/sweetalert";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  public username:string
  id : string
  constructor(private router : Router,private sweet : ShowDialogService,
     private menu: MenuController,private database: DatabaseService) {}
  

  ngOnInit(){
    this.user()
  }
  user(){
    this.database.storageCreate()
    this.database.getID().then(id =>{
      if(id != null || id != undefined){
      this.database.getUserId(id).subscribe(use=>{
        this.id = use
        console.log(use)
        this.database.getUserforId(this.id).subscribe(useri=>{
          this.username = useri.usuario
          console.log(useri.usuario)
          return useri.usuario
        })
      })
    }
    })
  }
  ionViewDidEnter(){
    this.user()
  }
  ionViewWillEnter(){
    this.user()
  }
  ionViewDidLoad(){
    this.user()
  }
  inicio(){
    this.menu.close()
    this.router.navigateByUrl("/home")
  }
  planes(){
    this.menu.close()
    this.router.navigateByUrl("/planes")
  }
  compras(){
    this.menu.close()
    this.router.navigateByUrl("/compras")
  }
  carrito(){
    this.menu.close()
    this.router.navigateByUrl("/carrito")
  }
  cerrar(){
    this.sweet.showCerrarSesion()
  }
}
