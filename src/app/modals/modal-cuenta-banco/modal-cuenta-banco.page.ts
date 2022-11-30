import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DatabaseService } from 'src/app/servicios/database.service';
import { ShowDialogService } from 'src/app/servicios/sweetalert';

@Component({
  selector: 'app-modal-cuenta-banco',
  templateUrl: './modal-cuenta-banco.page.html',
  styleUrls: ['./modal-cuenta-banco.page.scss'],
})
export class ModalCuentaBancoPage implements OnInit {
  @Input() id;
  @Input() idUser;
  @Input() total;
  countS: string;
  nombre: string = '';
  apellido: string = '';
  num_tarjeta: string = '';
  fecha_vencimiento: string = '';
  cod_seguridad: string = '';
  constructor(
    private modalCtrl: ModalController,
    private database: DatabaseService,
    private sweet: ShowDialogService
  ) {}

  ngOnInit() {
    this.database.countCarrito(this.idUser).subscribe((res) => {
      this.countS = res.size.toString();
    });
  }
  ionViewDidEnter() {
    this.database.getCuentaBancaria(this.idUser).subscribe((res) => {
      if (res.length != 0) {
        var c = (document.getElementById('cuenta').style.display = 'none');
        var cl = (document.getElementById('cuenta_lista').style.display =
          'block');
      } else {
        var c = (document.getElementById('cuenta').style.display = 'block');
        var cl = (document.getElementById('cuenta_lista').style.display =
          'none');
      }
    });
  }
  dismiss() {
    this.database.getCuentaBancaria(this.idUser).subscribe((res) => {
      if (res.length != 0) {
        res.forEach((element) => {
          this.modalCtrl.dismiss({
            idUsers: element.idUser,
          });
        });
      } else {
        if (
          this.nombre == '' ||
          this.apellido == '' ||
          this.num_tarjeta == '' ||
          this.fecha_vencimiento == '' ||
          this.cod_seguridad == ''
        ) {
          this.sweet.showBlank();
        } else {
          this.modalCtrl.dismiss({
            idUser: this.idUser,
            nombre: this.nombre,
            apellido: this.apellido,
            num_tarjeta: this.num_tarjeta,
            fecha_vencimiento: this.fecha_vencimiento.substring(5, 10),
            cvv: this.cod_seguridad,
          });
        }
      }
    });
  }
}
