import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/servicios/database.service';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.page.html',
  styleUrls: ['./compras.page.scss'],
})
export class ComprasPage implements OnInit {
  pagoDatabase: any = [];

  constructor(private database: DatabaseService) {}

  ngOnInit() {}
  user() {
    this.database.storageCreate();
    this.database.getID().then((id) => {
      if (id != null || id != undefined) {
        this.database.getUserId(id).subscribe((use) => {
          this.database.getPagos(use).subscribe(res => {
            this.pagoDatabase = res;
          });
        });
      }
    });
  }
  ionViewDidEnter() {
    this.user();
  }
}