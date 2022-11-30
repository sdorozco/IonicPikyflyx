(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-plan-plan-module"],{

/***/ "7QDW":
/*!*******************************************!*\
  !*** ./src/app/pages/plan/plan.module.ts ***!
  \*******************************************/
/*! exports provided: PlanPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanPageModule", function() { return PlanPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _plan_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plan-routing.module */ "f9TA");
/* harmony import */ var _plan_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plan.page */ "jiht");







let PlanPageModule = class PlanPageModule {
};
PlanPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _plan_routing_module__WEBPACK_IMPORTED_MODULE_5__["PlanPageRoutingModule"]
        ],
        declarations: [_plan_page__WEBPACK_IMPORTED_MODULE_6__["PlanPage"]]
    })
], PlanPageModule);



/***/ }),

/***/ "QJbs":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/plan/plan.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>PLAN</ion-title>\n    <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"background\">\n    <div style=\"background-color: white; border-radius: 35PX;\">\n      <center><h3 >PLANES</h3></center> \n          <table class=\"table\">\n            <thead>\n              <tr style=\"background-color: black; color: #fff;\">\n                <th scope=\"col\">Membresia</th>\n                <th scope=\"col\">Meses</th>\n                <th scope=\"col\">Valor Mes</th>\n                <th scope=\"col\">N° Perfiles</th>\n                <th scope=\"col\"></th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr style=\"width: 100%\">\n                <th scope=\"row\" style=\"margin-top: 5px;\"><input type=\"text\" value=\"{{membresia}}\" readonly></th>\n                <center><ion-item>\n                  <ion-select [(ngModel)]=\"mesSelected\" value=\"Meses\" multiple=\"false\" placeholder=\"Meses\">\n                    <ion-select-option *ngFor=\"let i of mesesArray let l = count\" value=\"{{i}}\">{{i}}</ion-select-option>\n                  </ion-select>\n                </ion-item></center>\n                <td  style=\"margin-top: 5px;\"><center><input type=\"text\" value=\"{{valor_mes | number : fractionSize}}\" readonly></center></td>\n                <td id=\"valor_real\" name=\"valor_real\" style=\"display: none\"> {{valor_real}} </td>\n                <td  style=\"margin-top: 5px;\">\n                <input type=\"text\" value=\"aumento\" style=\"display: none;\" readonly>\n                  <center><ion-item>\n                  <ion-select [(ngModel)]=\"itemSelected\" value=\"Perfiles\" multiple=\"false\" placeholder=\"Perfiles\" (ionChange)=\"getItem(itemSelected)\">\n                    <ion-select-option  *ngFor=\"let i of perfilArray let l = count\" value=\"{{i}}\">{{i}}</ion-select-option>\n                  </ion-select>\n                </ion-item></center>\n                </td>\n                <td style=\"margin-top: 5px;\"><ion-button (click)=\"guardar()\" color=\"danger\" size=\"small\"><ion-icon name=\"checkmark-sharp\"></ion-icon></ion-button></td>\n              </tr>\n            </tbody>\n          </table>\n          </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "f9TA":
/*!***************************************************!*\
  !*** ./src/app/pages/plan/plan-routing.module.ts ***!
  \***************************************************/
/*! exports provided: PlanPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanPageRoutingModule", function() { return PlanPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _plan_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plan.page */ "jiht");




const routes = [
    {
        path: '',
        component: _plan_page__WEBPACK_IMPORTED_MODULE_3__["PlanPage"]
    }
];
let PlanPageRoutingModule = class PlanPageRoutingModule {
};
PlanPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PlanPageRoutingModule);



/***/ }),

/***/ "jiht":
/*!*****************************************!*\
  !*** ./src/app/pages/plan/plan.page.ts ***!
  \*****************************************/
/*! exports provided: PlanPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanPage", function() { return PlanPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_plan_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./plan.page.html */ "QJbs");
/* harmony import */ var _plan_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plan.page.scss */ "tazY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "fwsW");
/* harmony import */ var src_app_servicios_database_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/servicios/database.service */ "sih+");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "0QAI");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");








let PlanPage = class PlanPage {
    constructor(auth, storage, database, screenOrientation) {
        this.auth = auth;
        this.storage = storage;
        this.database = database;
        this.screenOrientation = screenOrientation;
        this.productoDatabase = [];
        this.perfilArray = [];
        this.membresia = "";
        this.valor_mes = "";
        this.valor_real = "";
        this.aumento = "";
        this.perfiles = "";
        this.cuenta_completa = "";
        this.mesesArray = [];
        this.itemSelected = "";
        this.mesSelected = "";
    }
    ngOnInit() {
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
        this.storage.get("id_product").then(res => {
            this.database.getProductoID(res).subscribe(rest => {
                this.membresia = rest.nombre;
                this.valor_mes = rest.valor_mes;
                this.valor_real = rest.valor_mes;
                this.perfiles = rest.perfiles;
                this.aumento = rest.aumento;
                this.cuenta_completa = rest.cuenta_completa;
                for (let i = 1; i <= parseInt(this.perfiles); i++) {
                    this.perfilArray[i - 1] = i;
                }
            });
        });
        for (let i = 1; i <= 12; i++) {
            this.mesesArray[i - 1] = i;
        }
    }
    guardar() {
        if (this.mesSelected == "" || this.perfiles == "") {
            console.log("esta vacio");
        }
        else {
            this.auth.user.subscribe(res => {
                var total = parseInt(this.mesSelected) * parseInt(this.valor_mes);
                this.database.addCarrito(res.uid, this.membresia, this.mesSelected, this.valor_mes, total, this.itemSelected);
            });
        }
    }
    getItem(perfil) {
        if (parseInt(perfil) == 1) {
            this.valor_mes = document.getElementById("valor_real").innerText;
        }
        else if (parseInt(perfil) > 1 && parseInt(perfil) < parseInt(this.perfiles)) {
            var valor_Real = document.getElementById("valor_real").innerText;
            console.log(valor_Real);
            var valor = parseInt(valor_Real) + ((parseInt(perfil) - 1) * parseInt(this.aumento));
            this.valor_mes = valor.toString();
        }
        else if (parseInt(perfil) == parseInt(this.perfiles)) {
            this.valor_mes = this.cuenta_completa;
        }
    }
};
PlanPage.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: src_app_servicios_database_service__WEBPACK_IMPORTED_MODULE_5__["DatabaseService"] },
    { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_6__["ScreenOrientation"] }
];
PlanPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-plan',
        template: _raw_loader_plan_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_plan_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PlanPage);



/***/ }),

/***/ "tazY":
/*!*******************************************!*\
  !*** ./src/app/pages/plan/plan.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".background {\n  background: url('backgroud.jpg');\n  width: 100%;\n  height: 100%;\n  padding: 5px;\n}\n\n.table {\n  background-color: white;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwbGFuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0E7RUFDSSx1QkFBQTtFQUNBLFdBQUE7QUFFSiIsImZpbGUiOiJwbGFuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5ke1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2JhY2tncm91ZC5qcGcnKTtcclxuICAgIHdpZHRoOiAxMDAlOyBcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG4udGFibGV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH0iXX0= */");

/***/ })

}]);
//# sourceMappingURL=pages-plan-plan-module.js.map