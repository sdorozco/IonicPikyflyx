import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { DatabaseService } from 'src/app/servicios/database.service';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { formatNumber } from '@angular/common';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.page.html',
  styleUrls: ['./plan.page.scss'],
})
export class PlanPage implements OnInit {
  productoDatabase : any = []
  perfilArray : any = []
  membresia : string = ""
  valor_mes : string = ""
  valor_real : string = ""
  aumento : string = ""
  perfiles : string = ""
  cuenta_completa : string = ""
  mesesArray : any = []
  itemSelected : string = ""
  mesSelected : string = ""

  constructor(private auth : AngularFireAuth, private storage : Storage,private database : DatabaseService,private screenOrientation: ScreenOrientation) { }

  ngOnInit() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    this.storage.get("id_product").then(res =>{
     this.database.getProductoID(res).subscribe(rest=>{
       this.membresia = rest.nombre
       this.valor_mes = rest.valor_mes
       this.valor_real = rest.valor_mes
       this.perfiles = rest.perfiles
       this.aumento = rest.aumento
       this.cuenta_completa = rest.cuenta_completa
        for(let i=1; i<= parseInt(this.perfiles); i++){
          this.perfilArray[i-1] = i
        }
     })
    })
    for(let i=1; i<= 12; i++){
      this.mesesArray[i-1] = i
    }
  }
  guardar(){
    if(this.mesSelected == "" || this.perfiles == ""){
      console.log("esta vacio")
    }else{
      this.auth.user.subscribe(res=>{
      var total = parseInt(this.mesSelected)*parseInt(this.valor_mes)
      this.database.addCarrito(res.uid,this.membresia,this.mesSelected,this.valor_mes,total,this.itemSelected)
      })
    } 
  }
  getItem(perfil: string) {
    if(parseInt(perfil) == 1){
      this.valor_mes = document.getElementById("valor_real").innerText
    }
    else if(parseInt(perfil) > 1 && parseInt(perfil) < parseInt(this.perfiles)){
      var valor_Real = document.getElementById("valor_real").innerText
      console.log(valor_Real)
      var valor = parseInt(valor_Real) + ((parseInt(perfil)-1)*parseInt(this.aumento))
      this.valor_mes = valor.toString()
    }else if(parseInt(perfil) == parseInt(this.perfiles)){
      this.valor_mes = this.cuenta_completa
    }
  }
}
