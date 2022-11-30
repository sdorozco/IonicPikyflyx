(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-inicio-sesion-inicio-sesion-module"],{

/***/ "9Q4P":
/*!***********************************************************!*\
  !*** ./src/app/pages/inicio-sesion/inicio-sesion.page.ts ***!
  \***********************************************************/
/*! exports provided: InicioSesionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioSesionPage", function() { return InicioSesionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_inicio_sesion_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./inicio-sesion.page.html */ "GHnp");
/* harmony import */ var _inicio_sesion_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inicio-sesion.page.scss */ "EPYB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _servicios_sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../servicios/sweetalert */ "t/Ax");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/servicios/auth.service */ "FHRc");







let InicioSesionPage = class InicioSesionPage {
    constructor(sweet, route, auth) {
        this.sweet = sweet;
        this.route = route;
        this.auth = auth;
        this.usuario = "diana@gmail.com";
        this.password = "123456";
    }
    ngOnInit() {
    }
    login() {
        if (this.usuario == null || this.password == null || this.usuario == "" || this.password == "") {
            this.sweet.showSweetInfo("Campos Vacios", "Los campos no deben quedar vacios");
        }
        else {
            this.auth.login(this.usuario, this.password, this.sweet);
            //this.database.ValidateUser(this.usuario,this.password)
        }
    }
    registro() {
        this.route.navigateByUrl("registro");
    }
};
InicioSesionPage.ctorParameters = () => [
    { type: _servicios_sweetalert__WEBPACK_IMPORTED_MODULE_4__["ShowDialogService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_servicios_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
];
InicioSesionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-inicio-sesion',
        template: _raw_loader_inicio_sesion_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_inicio_sesion_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], InicioSesionPage);



/***/ }),

/***/ "EPYB":
/*!*************************************************************!*\
  !*** ./src/app/pages/inicio-sesion/inicio-sesion.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-input.custom-input {\n  border-radius: 30px;\n  border: #6b6764;\n  border-color: #693c1b;\n  background: #000000;\n  color: white;\n  font-size: 14px;\n}\n\nimg.custom-img-fondo {\n  width: 60%;\n  height: 25%;\n  display: block;\n  margin: auto;\n}\n\nion-button.custom-button {\n  width: 90%;\n  height: 50px;\n  border-radius: 30px;\n  display: block;\n  margin: auto;\n  color: white;\n}\n\nion-button.custom-clear-pass {\n  display: block;\n  margin: auto;\n  color: #3880ff;\n  width: 100%;\n  font-size: 11px;\n}\n\n.background {\n  background: url('backgroud.jpg');\n  width: 100%;\n  height: 100%;\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxpbmljaW8tc2VzaW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUNFO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUFFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUdKOztBQURFO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFJSjs7QUFGRTtFQUNFLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBS0oiLCJmaWxlIjoiaW5pY2lvLXNlc2lvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taW5wdXQuY3VzdG9tLWlucHV0e1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgYm9yZGVyOiAjNmI2NzY0O1xyXG4gIGJvcmRlci1jb2xvcjogIzY5M2MxYjtcclxuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4gIGltZy5jdXN0b20taW1nLWZvbmRve1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGhlaWdodDogMjUlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG4gIGlvbi1idXR0b24uY3VzdG9tLWJ1dHRvbntcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIGlvbi1idXR0b24uY3VzdG9tLWNsZWFyLXBhc3N7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGNvbG9yOiAjMzg4MGZmO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgfVxyXG4gIC5iYWNrZ3JvdW5ke1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2JhY2tncm91ZC5qcGcnKTtcclxuICAgIHdpZHRoOiAxMDAlOyBcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICB9Il19 */");

/***/ }),

/***/ "GHnp":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inicio-sesion/inicio-sesion.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  \n  <div class=\"background\">\n    <H2 style=\"color:white; text-align: center; background-color: #0000007a;\">PIKYFLIX</H2>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title style=\"text-align: center;\">INICIAR SESIÓN</ion-card-title>\n      <img src=\"../../../assets/img/logo.png\" class=\"custom-img-fondo\">\n      \n    </ion-card-header>\n    <br>\n  <ion-card-content>\n    <ion-input type=\"email\" [(ngModel)]=\"usuario\" placeholder=\"Usuario\" class=\"custom-input\" name=\"usuario\" required=\"on\"></ion-input><br>\n    <ion-input type=\"password\" [(ngModel)]=\"password\" placeholder=\"Contraseña\" class=\"custom-input\" name=\"password\" required=\"on\"></ion-input>\n    <br> <ion-button fill=\"clear\" class=\"custom-clear-pass\" routerLink=\"/forgot-password\" >¿Se te olvidó tu contraseña?</ion-button>\n  </ion-card-content>\n  \n</ion-card>\n\n  <ion-button (click)=\"login()\" class=\"custom-button\" color=\"dark\">Iniciar sesión</ion-button>\n  <br><ion-button (click)=\"registro()\" class=\"custom-button\" color=\"warning\">Registrarse</ion-button>\n</div>\n\n</ion-content>\n\n");

/***/ }),

/***/ "Kup8":
/*!*********************************************************************!*\
  !*** ./src/app/pages/inicio-sesion/inicio-sesion-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: InicioSesionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioSesionPageRoutingModule", function() { return InicioSesionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _inicio_sesion_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inicio-sesion.page */ "9Q4P");




const routes = [
    {
        path: '',
        component: _inicio_sesion_page__WEBPACK_IMPORTED_MODULE_3__["InicioSesionPage"]
    }
];
let InicioSesionPageRoutingModule = class InicioSesionPageRoutingModule {
};
InicioSesionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InicioSesionPageRoutingModule);



/***/ }),

/***/ "YSpT":
/*!*************************************************************!*\
  !*** ./src/app/pages/inicio-sesion/inicio-sesion.module.ts ***!
  \*************************************************************/
/*! exports provided: InicioSesionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioSesionPageModule", function() { return InicioSesionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _inicio_sesion_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inicio-sesion-routing.module */ "Kup8");
/* harmony import */ var _inicio_sesion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inicio-sesion.page */ "9Q4P");







let InicioSesionPageModule = class InicioSesionPageModule {
};
InicioSesionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _inicio_sesion_routing_module__WEBPACK_IMPORTED_MODULE_5__["InicioSesionPageRoutingModule"]
        ],
        declarations: [_inicio_sesion_page__WEBPACK_IMPORTED_MODULE_6__["InicioSesionPage"]]
    })
], InicioSesionPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-inicio-sesion-inicio-sesion-module.js.map