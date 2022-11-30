import { Injectable } from '@angular/core';
import { MenuController } from '@ionic/angular';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Storage } from '@ionic/storage-angular';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root',
})
export class ShowDialogService {
  constructor(
    private router: Router,
    private menu: MenuController,
    private auth: AuthService,
    private storage: Storage,
  ) {}

  showSweetError(err: string) {
    if (err == 'Error: The email address is badly formatted.') {
      Swal.fire({
        title: 'Error!',
        text: 'Error, El correo Electrónico tiene un formato incorrecto',
        icon: 'error',
        confirmButtonText: 'Continuar',
      });
    } else if (
      err ==
      'Error: There is no user record corresponding to this identifier. The user may have been deleted.'
    ) {
      Swal.fire({
        title: 'Error!',
        text: 'Error, Usuario incorrecto',
        icon: 'error',
        confirmButtonText: 'Continuar',
      });
    } else if (
      err ==
      'Error: The password is invalid or the user does not have a password.'
    ) {
      Swal.fire({
        title: 'Error!',
        text: 'Error, Contraseña incorrecta',
        icon: 'error',
        confirmButtonText: 'Continuar',
      });
    }
  }
  showPrueba() {
    Swal.fire({
      title: 'Error!',
      text: 'Error, Usuario o Contraseña incorrectos',
      icon: 'error',
      confirmButtonText: 'Continuar',
    });
  }
  showLogin() {
    Swal.fire({
      title: 'Bienvenido',
      icon: 'success',
      showConfirmButton: false,
      timer: 1800,
    }).then((res) => {
      this.router.navigateByUrl('/home');
    });
  }
  showRegistro() {
    Swal.fire({
      title: 'Regitro Completado',
      icon: 'success',
      showConfirmButton: false,
      timer: 1800,
    }).then((res) => {
      this.router.navigateByUrl('/inicio-sesion');
    });
  }
  showSweetInfo(title: string, content: string) {
    Swal.fire({
      title: title,
      text: content,
      icon: 'info',
      timer: 2000,
    });
  }
  showBlank() {
    Swal.fire({
      title: 'Los campos no pueden estar vacios',
      icon: 'info',
      showConfirmButton: false,
      timer: 1800,
    });
  }
  showEmailInUse() {
    Swal.fire({
      title:
        'La dirección de correo electrónico ya está siendo utilizada por otra cuenta',
      icon: 'warning',
      showConfirmButton: false,
      showCancelButton: false,
      timer: 1800
    });
  }
  showPasswordLenght(){
    Swal.fire({
      title:
        'La contraseña debe tener al menos 6 caracteres',
      icon: 'warning',
      showConfirmButton: false,
      showCancelButton: false,
      timer: 1800
    });
  }
  showEmailFormatter(){
    Swal.fire({
      title: 'La dirección de correo electrónico está mal formateada.',
      icon: 'warning',
      showConfirmButton: false,
      showCancelButton: false,
      timer: 1800
    })
  }
  showAddCarrito() {
    Swal.fire({
      title: 'Cuenta añadida al Carrito de compra',
      icon: 'success',
      showConfirmButton: false,
      timer: 1800,
    });
  }
  showAddPagos() {
    Swal.fire({
      title: 'Pago Exitoso',
      icon: 'success',
      showConfirmButton: false,
      timer: 1800,
    });
  }
  showAddCuentaBancaria() {
    Swal.fire({
      title: 'Cuenta Bancaria añadida Exitosamente',
      icon: 'success',
      showConfirmButton: false,
      timer: 1800,
    });
  }
  showFailAddCarrito() {
    Swal.fire({
      title: 'Hubo un error al intentar agregar la cuenta al carrito',
      icon: 'error',
      showConfirmButton: false,
      timer: 1800,
    });
  }
  showDeleteCarrito() {
    Swal.fire({
      title: 'Suscripcion eliminada del carrito de compra',
      icon: 'success',
      showConfirmButton: false,
      timer: 1800,
    });
  }
  showCerrarSesion() {
    Swal.fire({
      title: '¿Estar Seguro que Deseas Cerrar Sesión?',
      icon: 'warning',
      showDenyButton: true,
      showConfirmButton: true,
      confirmButtonText: 'Sí',
    }).then((result) => {
      if (result.isConfirmed) {
        this.menu.close();
        this.auth.logout();
        this.storage.clear();
        this.storage.remove('id').then((res) => {
          console.log('borrado');
        });
      }
    });
  }
  showDeleteQuestion(id, idUser,database : DatabaseService) {
    Swal.fire({
      title: '¿Estar Seguro que Deseas Eliminar esa suscripción?',
      icon: 'warning',
      showDenyButton: true,
      showConfirmButton: true,
      confirmButtonText: 'Sí',
    }).then((result) => {
      if (result.isConfirmed) {
        database.deleteCarrito(id, idUser);
      }
    });
  }
}
