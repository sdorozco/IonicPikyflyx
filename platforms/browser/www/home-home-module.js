(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "zpKS");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "WcN3":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>INICIO</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button class=\"badge-button\" routerLink=\"/carrito\">\n        <ion-icon size=\"large\" name=\"cart\" style=\"color: #d27a7a;\">\n        </ion-icon>\n        <ion-badge class=\"badge-one\">{{count}}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"back\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"recargar($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <h3 style=\"color: white;text-align: center;\">PIKIFLIX</h3>\n\n    <ion-card *ngFor=\"let producto of productDatabase\">\n      <ion-card-header>\n        <ion-card-title style=\"text-align: center; font-weight: bold\">{{producto.nombre}}</ion-card-title>\n      </ion-card-header>\n    \n      <ion-card-content>\n        <img src={{producto.foto}}>\n        <p style=\"text-align: justify;\">{{producto.descripcion}}</p>\n      </ion-card-content>\n      <ion-button (click)=\"planes(producto.id)\" color=\"dark\" expand=\"full\">PLANES</ion-button>\n    </ion-card>\n    \n</ion-content>\n");

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "zpKS");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "f6od":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".back {\n  --background: url('background.jpg');\n}\n\n.badge-one {\n  position: absolute;\n  top: 0px;\n  right: -5px;\n  font-size: 0.6em;\n  --padding-start: 5px;\n  --padding-end: 5px;\n  border-radius: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUNBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUVGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2t7XG4gIC0tYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9iYWNrZ3JvdW5kLmpwZ1wiKVxufVxuLmJhZGdlLW9uZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiAtNXB4O1xuICBmb250LXNpemU6IDAuNmVtO1xuICAtLXBhZGRpbmctc3RhcnQ6IDVweDtcbiAgLS1wYWRkaW5nLWVuZDogNXB4O1xuICBib3JkZXItcmFkaXVzOiAzNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "zpKS":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "WcN3");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "f6od");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _servicios_database_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../servicios/database.service */ "sih+");







let HomePage = class HomePage {
    constructor(auth, db, router) {
        this.auth = auth;
        this.db = db;
        this.router = router;
        this.productDatabase = [];
        this.count = "";
    }
    ngOnInit() {
        this.db.getProductos().subscribe(res => {
            this.productDatabase = res;
        });
    }
    planes(id) {
        this.router.navigateByUrl("planes");
    }
    ionViewDidEnter() {
        this.auth.user.subscribe(res => {
            this.db.countCarrito(res.uid).subscribe(res => {
                this.count = res.size;
            });
        });
    }
    recargar(event) {
        setTimeout(() => {
            location.reload();
            event.target.complete();
        }, 2000);
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
    { type: _servicios_database_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map