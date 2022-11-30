import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import * as firebase from 'firebase';
import { DatabaseService } from 'src/app/servicios/database.service';
import { ShowDialogService } from 'src/app/servicios/sweetalert';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  foto : any
  usuario:string = ""
  nombre:string= ""
  apellido:string= ""
  correo:string= ""
  telefono:string= ""
  contrasena:string= ""
  storageRef = firebase.default.storage().ref()
  constructor(private camera: Camera,private sweet : ShowDialogService,private db : DatabaseService,private router : Router) { }

  ngOnInit() {
  }
  hacerFoto() {
    const options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL
    }
    this.camera.getPicture(options).then((imageData) => {
      this.foto = 'data:image/jpeg;base64,' + imageData;
      console.log(this.foto)
      console.log(imageData)
    }, (err) => {
      console.log(err);
    });
  }
  registro(){
    if(this.usuario == null || this.usuario == "" || this.nombre == null || this.nombre == "" || this.apellido == null || this.apellido == "" ||
    this.telefono == null || this.telefono == "" || this.contrasena == null || this.contrasena == "" || this.foto == null || this.foto == ""){
      this.sweet.showBlank()
    }else{
      this.db.addUser(this.usuario,this.nombre,this.apellido,this.correo,this.telefono,this.contrasena,this.foto)
    }
  }
}
