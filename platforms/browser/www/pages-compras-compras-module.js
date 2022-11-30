(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-compras-compras-module"],{

/***/ "EYN+":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/compras/compras.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Compras</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button class=\"badge-button\" routerLink=\"/carrito\">\n        <ion-icon size=\"large\" name=\"cart\" style=\"color: #d27a7a\"> </ion-icon>\n        <ion-badge class=\"badge-one\">{{count}}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"background\">\n    <ion-list *ngFor=\"let pagos of pagoDatabase\">\n      <ion-item>\n        <ion-label position=\"floating\">SUSCRIPCION {{pagos.nombre}}</ion-label>\n        <ion-input value=\"{{pagos.fecha}}-{{pagos.hora}}\" type=\"text\" readonly></ion-input>\n        <ion-button expand=\"full\" fill=\"solid\" color=\"warning\" style=\"width: 100%;\">\n          <ion-icon name=\"wallet\"></ion-icon>\n        </ion-button>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "W/39":
/*!*********************************************************!*\
  !*** ./src/app/pages/compras/compras-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ComprasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComprasPageRoutingModule", function() { return ComprasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _compras_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./compras.page */ "YP7E");




const routes = [
    {
        path: '',
        component: _compras_page__WEBPACK_IMPORTED_MODULE_3__["ComprasPage"]
    }
];
let ComprasPageRoutingModule = class ComprasPageRoutingModule {
};
ComprasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ComprasPageRoutingModule);



/***/ }),

/***/ "YP7E":
/*!***********************************************!*\
  !*** ./src/app/pages/compras/compras.page.ts ***!
  \***********************************************/
/*! exports provided: ComprasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComprasPage", function() { return ComprasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_compras_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./compras.page.html */ "EYN+");
/* harmony import */ var _compras_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./compras.page.scss */ "mMF8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_servicios_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/servicios/database.service */ "sih+");





let ComprasPage = class ComprasPage {
    constructor(database) {
        this.database = database;
        this.pagoDatabase = [];
    }
    ngOnInit() { }
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
};
ComprasPage.ctorParameters = () => [
    { type: src_app_servicios_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"] }
];
ComprasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-compras',
        template: _raw_loader_compras_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_compras_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ComprasPage);



/***/ }),

/***/ "mMF8":
/*!*************************************************!*\
  !*** ./src/app/pages/compras/compras.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".background {\n  background: url('backgroud.jpg');\n  width: 100%;\n  height: 100%;\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjb21wcmFzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBQ0oiLCJmaWxlIjoiY29tcHJhcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9iYWNrZ3JvdWQuanBnJyk7XHJcbiAgICB3aWR0aDogMTAwJTsgXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "rIvi":
/*!*************************************************!*\
  !*** ./src/app/pages/compras/compras.module.ts ***!
  \*************************************************/
/*! exports provided: ComprasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComprasPageModule", function() { return ComprasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _compras_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./compras-routing.module */ "W/39");
/* harmony import */ var _compras_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./compras.page */ "YP7E");







let ComprasPageModule = class ComprasPageModule {
};
ComprasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _compras_routing_module__WEBPACK_IMPORTED_MODULE_5__["ComprasPageRoutingModule"]
        ],
        declarations: [_compras_page__WEBPACK_IMPORTED_MODULE_6__["ComprasPage"]]
    })
], ComprasPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-compras-compras-module.js.map