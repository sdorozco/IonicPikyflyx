import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { DatabaseService } from '../servicios/database.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public productDatabase : any = [];
  count : any = ""
  constructor(private auth : AngularFireAuth,private db : DatabaseService,private router : Router) {
   
  }
  ngOnInit(){
    this.db.getProductos().subscribe(res=>{
      this.productDatabase = res
    })    
  }
  planes(id){
    this.router.navigateByUrl("planes")
  }
  ionViewDidEnter(){
    this.auth.user.subscribe(res=>{
      this.db.countCarrito(res.uid).subscribe(res=>{
        this.count = res.size
      })
    })
  }
  recargar(event){
    setTimeout(() => {
      location.reload()
      event.target.complete();
    }, 2000);
  }
}
