import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ShowDialogService } from './sweetalert';
import Swal from 'sweetalert2'
import { AngularFirestore } from '@angular/fire/firestore';
import { user } from "../share/user";
import { producto } from "../share/products";
import { CuentaBancaria } from "../share/cuenta_bancaria";
import { usuario,productos,pagos,cart,cuenta_bancaria,estadoC,estadoP } from "../share/references";
import { Storage } from "@ionic/storage-angular";
import { map } from "rxjs/operators";
import { AngularFireAuth } from "@angular/fire/auth";
import { carrito } from '../share/carrito';
import { Pagos } from '../share/pagos';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private router: Router,private storage: Storage,
    private sweet: ShowDialogService,private db: AngularFirestore,private AFauth: AngularFireAuth) { }

  async storageCreate() {
      await this.storage.create();
  }
  ValidateUser(usuarios,password){
    const rou = this.router
    const storage = this.storage
    return this.db.collection(usuario).ref.where("usuario","==",usuarios).get().then(function(query){
       if(query.empty){
        Swal.fire({
          title: 'Acceso Denegado!',
          text: 'Error, Usuario o Contraseña incorrecta',
          icon: 'error',
          confirmButtonText: 'Continuar'
        });
       }
     return query.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        const data = doc.data() as user
        if(data.password == password){
          storage.set("id",doc.id)
          rou.navigateByUrl("/home")
          return true
        }else{
          Swal.fire({
            title: 'Acceso Denegado!',
            text: 'Error, Contraseña incorrecta',
            icon: 'error',
            confirmButtonText: 'Continuar'
          });
          return false
        }
    });
    }).catch(err =>{
      console.log(err)
      Swal.fire({
        title: 'Acceso Denegado!',
        text: 'Error, Usuario incorrecto',
        icon: 'error',
        confirmButtonText: 'Continuar'
      });
    })
  }
  getID(){
    return this.storage.get("id").then(res =>{
       return res
     })
   }
   getUserId(id){
    return this.db.collection(usuario).doc(id).snapshotChanges().pipe(map(usuarios =>{  
        return usuarios.payload.id;
    }))
  }
  getUserforId(id){
    return this.db.collection(usuario).doc(id).snapshotChanges().pipe(map(usuarios =>{  
        const data = usuarios.payload.data() as user
        data.id = usuarios.payload.id
        return data;
    }))
  }
  addUser(user,nombre,apellido,correo,telefono,contrasena,foto){
    this.AFauth.createUserWithEmailAndPassword(correo,contrasena).then(res=>{
      this.db.collection(usuario).doc(res.user.uid).set({
        usuario : user,
        nombre : nombre,
        apellido : apellido,
        correo : correo,
        telefono : telefono,
        contrasena : contrasena,
        foto : foto
      }).then(res=>{
        this.sweet.showRegistro()
      })
    }).catch(err=>{
      console.log(err)
      if(err.message == 'The email address is already in use by another account.'){
        this.sweet.showEmailInUse()
      }else if(err.message == "Password should be at least 6 characters"){
        this.sweet.showPasswordLenght()
      }else if(err.message == 'The email address is badly formatted.'){
        this.sweet.showEmailFormatter()
      }
    })
  }
  addCarrito(idUser,descripcion,meses,valor_mes,total,perfiles){
    this.db.collection(cart).doc(idUser).collection(idUser).doc().set({
    idUser:idUser,
    descripcion: descripcion,
    meses:meses,
    valor_mes:valor_mes,
    total:total,
    perfiles:perfiles,
    estado : estadoP
    }).then(res=>{
      this.sweet.showAddCarrito()
      this.router.navigateByUrl("/carrito")
    }).catch(err=>{

    })
  }
  getCarrito(idUser){
    return this.db.collection(cart).doc(idUser).collection(idUser).snapshotChanges().pipe(map(res=>{
      return res.map(ar=>{
      const data = ar.payload.doc.data() as carrito
      data.id = ar.payload.doc.id
      return data
      })
    }))
  }
  countCarrito(idUser){
  return this.db.collection(cart).doc(idUser).collection(idUser).get()
  }
  getProductos(){
    return this.db.collection(productos).snapshotChanges().pipe(map(prod =>{
      return prod.map(ar=>{
        const data = ar.payload.doc.data() as producto
        data.id = ar.payload.doc.id
        return data;
      })
    }))
  }
  getProductoID(id){
    return this.db.collection(productos).doc(id).snapshotChanges().pipe(map(res=>{
      const data = res.payload.data() as producto
      data.id = res.payload.id
      return data
    }))
  }
  deleteCarrito(id,idUser){
    this.db.collection(cart).doc(idUser).collection(idUser).doc(id).delete().then(res=>{
      this.sweet.showDeleteCarrito()
    })
  }
  addCuentaBancaria(idUser,nombre,apellido,num_tarjeta,fecha_vencimiento,cod_seguridad){
    this.db.collection(cuenta_bancaria).doc(idUser).collection(idUser).add({
      idUser : idUser,
      nombre : nombre,
      apellido : apellido,
      numero_tarjeta : num_tarjeta,
      fecha_vencimiento : fecha_vencimiento,
      cvv : cod_seguridad
    }).then(res=>{
      this.sweet.showAddCuentaBancaria()
    })
  }
  getCuentaBancaria(idUser){
   return this.db.collection(cuenta_bancaria).doc(idUser).collection(idUser).snapshotChanges().pipe(map(res=>{
      return res.map(cb=>{
        const data = cb.payload.doc.data() as CuentaBancaria
        data.id = cb.payload.doc.id
        return data
      })
    }))
  }
  addPagos(id_fecha,idUser,fecha,hora,nombre,perfiles,meses,total){
    this.db.collection(pagos).doc(idUser).collection(idUser).doc(id_fecha).set({
      idUser : idUser,
      fecha : fecha,
      hora : hora,
      nombre : nombre,
      perfiles : perfiles,
      meses : meses,
      total : total
    }).then(res=>{
      console.log("agregado")
    })
  }
  getPagos(idUser){
    return this.db.collection(pagos).doc(idUser).collection(idUser).snapshotChanges().pipe(map(res=>{
     return res.map(pg=>{
        const data = pg.payload.doc.data() as Pagos
        data.id = pg.payload.doc.id
        return data
      })
    }))
  }
  deleteCarritoShow(idUser,idproduct){
    this.db.collection(cart).doc(idUser).collection(idUser).doc(idproduct).delete()
  }
}
