import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { DatabaseService } from 'src/app/servicios/database.service';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.page.html',
  styleUrls: ['./planes.page.scss'],
})
export class PlanesPage implements OnInit {
  public productDatabase : any = [];
  count : any = ""
  constructor(private auth : AngularFireAuth ,private db : DatabaseService,private router : Router,private storage : Storage) { }

  ngOnInit() {
    this.db.getProductos().subscribe(res=>{
      this.productDatabase = res
    }) 
  }
  ionViewDidEnter(){
    this.auth.user.subscribe(res=>{
      this.db.countCarrito(res.uid).subscribe(res=>{
        this.count = res.size
      })
    })
  }
  plan(id){
    this.storage.remove("id_product").then(res=>{
      this.storage.set("id_product",id)
      this.router.navigateByUrl("/plan")
    })
  }

}
