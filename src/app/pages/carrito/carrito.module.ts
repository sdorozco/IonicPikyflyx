import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarritoPageRoutingModule } from './carrito-routing.module';

import { CarritoPage } from './carrito.page';
import { ModalCuentaBancoPage } from 'src/app/modals/modal-cuenta-banco/modal-cuenta-banco.page';
import { ModalCuentaBancoPageModule } from 'src/app/modals/modal-cuenta-banco/modal-cuenta-banco.module';

@NgModule({
  entryComponents:[
    ModalCuentaBancoPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarritoPageRoutingModule,
    ModalCuentaBancoPageModule
  ],
  declarations: [CarritoPage]
})
export class CarritoPageModule {}
