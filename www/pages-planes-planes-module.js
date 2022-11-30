(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-planes-planes-module"],{

/***/ "2hCb":
/*!***********************************************!*\
  !*** ./src/app/pages/planes/planes.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".background {\n  background: url('backgroud.jpg');\n  width: 100%;\n  height: 100%;\n  padding: 5px;\n}\n\n.table {\n  background-color: white;\n  width: 100%;\n}\n\n.badge-one {\n  position: absolute;\n  top: 0px;\n  right: -5px;\n  font-size: 0.6em;\n  --padding-start: 5px;\n  --padding-end: 5px;\n  border-radius: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwbGFuZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFDRTtFQUNFLHVCQUFBO0VBQ0EsV0FBQTtBQUVKOztBQUFFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBR0oiLCJmaWxlIjoicGxhbmVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5ke1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2JhY2tncm91ZC5qcGcnKTtcclxuICAgIHdpZHRoOiAxMDAlOyBcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICB9XHJcbiAgLnRhYmxle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLmJhZGdlLW9uZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHJpZ2h0OiAtNXB4O1xyXG4gICAgZm9udC1zaXplOiAwLjZlbTtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNXB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzVweDtcclxuICB9Il19 */");

/***/ }),

/***/ "ZsIB":
/*!*******************************************************!*\
  !*** ./src/app/pages/planes/planes-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: PlanesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanesPageRoutingModule", function() { return PlanesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _planes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./planes.page */ "jovl");




const routes = [
    {
        path: '',
        component: _planes_page__WEBPACK_IMPORTED_MODULE_3__["PlanesPage"]
    }
];
let PlanesPageRoutingModule = class PlanesPageRoutingModule {
};
PlanesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PlanesPageRoutingModule);



/***/ }),

/***/ "jovl":
/*!*********************************************!*\
  !*** ./src/app/pages/planes/planes.page.ts ***!
  \*********************************************/
/*! exports provided: PlanesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanesPage", function() { return PlanesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_planes_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./planes.page.html */ "wn/y");
/* harmony import */ var _planes_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./planes.page.scss */ "2hCb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "fwsW");
/* harmony import */ var src_app_servicios_database_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/servicios/database.service */ "sih+");








let PlanesPage = class PlanesPage {
    constructor(auth, db, router, storage) {
        this.auth = auth;
        this.db = db;
        this.router = router;
        this.storage = storage;
        this.productDatabase = [];
        this.count = "";
    }
    ngOnInit() {
        this.db.getProductos().subscribe(res => {
            this.productDatabase = res;
        });
    }
    ionViewDidEnter() {
        this.auth.user.subscribe(res => {
            this.db.countCarrito(res.uid).subscribe(res => {
                this.count = res.size;
            });
        });
    }
    plan(id) {
        this.storage.remove("id_product").then(res => {
            this.storage.set("id_product", id);
            this.router.navigateByUrl("/plan");
        });
    }
};
PlanesPage.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
    { type: src_app_servicios_database_service__WEBPACK_IMPORTED_MODULE_7__["DatabaseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] }
];
PlanesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-planes',
        template: _raw_loader_planes_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_planes_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PlanesPage);



/***/ }),

/***/ "sbyf":
/*!***********************************************!*\
  !*** ./src/app/pages/planes/planes.module.ts ***!
  \***********************************************/
/*! exports provided: PlanesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanesPageModule", function() { return PlanesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _planes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./planes-routing.module */ "ZsIB");
/* harmony import */ var _planes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./planes.page */ "jovl");







let PlanesPageModule = class PlanesPageModule {
};
PlanesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _planes_routing_module__WEBPACK_IMPORTED_MODULE_5__["PlanesPageRoutingModule"]
        ],
        declarations: [_planes_page__WEBPACK_IMPORTED_MODULE_6__["PlanesPage"]]
    })
], PlanesPageModule);



/***/ }),

/***/ "wn/y":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/planes/planes.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Planes</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button class=\"badge-button\"  routerLink=\"/carrito\">\n        <ion-icon size=\"large\" name=\"cart\" style=\"color: #d27a7a;\">\n        </ion-icon>\n        <ion-badge class=\"badge-one\">{{count}}</ion-badge>\n      </ion-button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"background\">\n  <div style=\"background-color: white; border-radius: 35PX;\">\n<center><h3 >PLANES</h3></center> \n    <table class=\"table\">\n      <thead>\n        <tr style=\"background-color: black; color: #fff;\">\n          <th scope=\"col\">Membresia</th>\n          <th scope=\"col\">Valor Mes</th>\n          <th scope=\"col\">N° Perfiles</th>\n          <th scope=\"col\"></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr style=\"width: 100%\" *ngFor=\"let producto of productDatabase\" >\n          <th scope=\"row\" style=\"margin-top: 5px;\">{{producto.nombre}}</th>\n          <td  style=\"margin-top: 5px;\"><center>{{producto.valor_mes}}</center></td><br>\n          <center><td  style=\"margin-top: 5px;\" *ngIf=\"producto.nombre != 'NETFLIX'; else kid\">{{producto.perfiles}}</td></center><br>\n          <ng-template #kid><td  style=\"margin-top: 5px;\">{{producto.perfiles}}+KID</td><br></ng-template>\n          <td  style=\"margin-top: 5px;\"><ion-button (click)=\"plan(producto.id)\" color=\"danger\" size=\"small\"><ion-icon name=\"checkmark-sharp\"></ion-icon></ion-button></td>\n        </tr>\n      </tbody>\n    </table>\n    </div>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=pages-planes-planes-module.js.map