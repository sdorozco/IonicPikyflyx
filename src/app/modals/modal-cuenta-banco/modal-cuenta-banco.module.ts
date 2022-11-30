import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalCuentaBancoPageRoutingModule } from './modal-cuenta-banco-routing.module';

import { ModalCuentaBancoPage } from './modal-cuenta-banco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalCuentaBancoPageRoutingModule
  ],
  declarations: [ModalCuentaBancoPage]
})
export class ModalCuentaBancoPageModule {}
