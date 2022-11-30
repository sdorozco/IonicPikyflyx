import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { delay, map } from 'rxjs/operators';
import { ModalCuentaBancoPage } from 'src/app/modals/modal-cuenta-banco/modal-cuenta-banco.page';
import { DatabaseService } from 'src/app/servicios/database.service';
import { ShowDialogService } from 'src/app/servicios/sweetalert';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {
  count: any = '';
  total: number = 0;
  carritoDatabase: any = [];
  id: string;
  idUser: string;
  perfiles: string;
  meses: string;
  pagosDatabase: any = [];
  constructor(
    private database: DatabaseService,
    private auth: AngularFireAuth,
    private sweet: ShowDialogService,
    private modalCtrl: ModalController,
    private router: Router
  ) {}

  ngOnInit() {
    this.auth.user.subscribe((res) => {
      this.database.getCarrito(res.uid).subscribe((res) => {
        this.carritoDatabase = res;

        res.forEach((element) => {
          this.id = element.id;
          this.idUser = element.idUser;
          this.total =
            this.total + parseInt(element.valor_mes) * parseInt(element.meses);
        });
      });
    });
  }
  p(id, idUser) {
    this.sweet.showDeleteQuestion(id, idUser, this.database);
  }
  ionViewDidEnter() {
    this.auth.user.subscribe((res) => {
      this.database.countCarrito(res.uid).subscribe((res) => {
        this.count = res.size;
      });
    });
  }
  ionViewDidLeave(){
    this.total = 0 
  }
  async pagar() {
    const modal = await this.modalCtrl.create({
      component: ModalCuentaBancoPage,
      componentProps: {
        id: this.id,
        idUser: this.idUser,
        total: this.total,
      },
    });
    await modal.present();

    const { data } = await modal.onDidDismiss();
    if (data['nombre'] != undefined) {
      this.database.addCuentaBancaria(
        data['idUser'],
        data['nombre'],
        data['apellido'],
        data['num_tarjeta'],
        data['fecha_vencimiento'],
        data['cvv']
      );
      this.database.getCarrito(this.idUser).subscribe((res) => {
        var ret = res.length
        for (let i = 0; i <= ret; i++) {
          var hoy = new Date();
          var fecha =
            hoy.getDate() +
            '-' +
            (hoy.getMonth() + 1) +
            '-' +
            hoy.getFullYear();
          var hora =
            hoy.getHours() + '-' + hoy.getMinutes() + '-' + hoy.getSeconds();
          var id_fecha = fecha + ' ' + hora + i;
          delay(2000)
          this.database.addPagos(
            id_fecha,
            this.idUser,
            fecha,
            hora,
            res[i].descripcion,
            res[i].perfiles,
            res[i].meses,
            res[i].total
          );
          
          this.database.deleteCarritoShow(this.idUser, res[i].id);
        }
      });
      this.sweet.showAddPagos()
      this.router.navigateByUrl('/home');
    } else {
      this.database.getCarrito(this.idUser).subscribe(res=> { 
        for (let i = 0; i <= res.length; i++) {
          var hoy = new Date();
          var fecha =
            hoy.getDate() +
            '-' +
            (hoy.getMonth() + 1) +
            '-' +
            hoy.getFullYear();
          var hora =
            hoy.getHours() + '-' + hoy.getMinutes() + '-' + hoy.getSeconds();
          var id_fecha = fecha + ' ' + hora + i;
          delay(2000)
          this.database.addPagos(
            id_fecha,
            this.idUser,
            fecha,
            hora,
            res[i].descripcion,
            res[i].perfiles,
            res[i].meses,
            res[i].total
          );
          this.database.deleteCarritoShow(this.idUser, res[i].id);
        }
      });
      this.sweet.showAddPagos()
      this.router.navigateByUrl('/home');
    }
  }
}
