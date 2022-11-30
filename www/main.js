(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Diana_movil\piky\pikyflyx\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment, firebaseConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseConfig", function() { return firebaseConfig; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
const firebaseConfig = {
    apiKey: "AIzaSyB-9xCWeKr_TkP92BsSgH0idibDfMfXeRo",
    authDomain: "pikyflyx.firebaseapp.com",
    projectId: "pikyflyx",
    storageBucket: "pikyflyx.appspot.com",
    messagingSenderId: "747530219982",
    appId: "1:747530219982:web:1177dc376ce84626c93b9f",
    measurementId: "G-H68L2K1VHT"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "FHRc":
/*!*******************************************!*\
  !*** ./src/app/servicios/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "fwsW");





let AuthService = class AuthService {
    constructor(AFauth, router, storage) {
        this.AFauth = AFauth;
        this.router = router;
        this.storage = storage;
        this.isLogged = false;
        AFauth.authState.subscribe(user => {
            if (user != null || user != undefined) {
                console.log(user.uid);
                this.storage.set("id", user.uid);
                this.isLogged = user;
            }
        });
    }
    login(email, password, sweet) {
        this.AFauth.signInWithEmailAndPassword(email, password).then(user => {
            sweet.showLogin();
        }).catch(err => console.log(err));
    }
    logout() {
        this.AFauth.signOut().then(res => {
            console.log("sesión cerrada");
            this.router.navigate(["/inicio-sesion"]);
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "JlN+":
/*!******************************************!*\
  !*** ./src/app/guards/no-login.guard.ts ***!
  \******************************************/
/*! exports provided: NoLoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoLoginGuard", function() { return NoLoginGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "fwsW");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let NoLoginGuard = class NoLoginGuard {
    constructor(auth, router, storage) {
        this.auth = auth;
        this.router = router;
        this.storage = storage;
    }
    canActivate(next, state) {
        return this.storage.get("id").then(res => {
            if (res == null) {
                return true;
            }
            else {
                this.router.navigate(["/home"]);
                return false;
            }
        });
    }
};
NoLoginGuard.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] }
];
NoLoginGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], NoLoginGuard);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _servicios_database_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./servicios/database.service */ "sih+");
/* harmony import */ var _servicios_sweetalert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./servicios/sweetalert */ "t/Ax");








let AppComponent = class AppComponent {
    constructor(router, sweet, menu, database) {
        this.router = router;
        this.sweet = sweet;
        this.menu = menu;
        this.database = database;
    }
    ngOnInit() {
        this.user();
    }
    user() {
        this.database.storageCreate();
        this.database.getID().then(id => {
            if (id != null || id != undefined) {
                this.database.getUserId(id).subscribe(use => {
                    this.id = use;
                    console.log(use);
                    this.database.getUserforId(this.id).subscribe(useri => {
                        this.username = useri.usuario;
                        console.log(useri.usuario);
                        return useri.usuario;
                    });
                });
            }
        });
    }
    ionViewDidEnter() {
        this.user();
    }
    ionViewWillEnter() {
        this.user();
    }
    ionViewDidLoad() {
        this.user();
    }
    inicio() {
        this.menu.close();
        this.router.navigateByUrl("/home");
    }
    planes() {
        this.menu.close();
        this.router.navigateByUrl("/planes");
    }
    compras() {
        this.menu.close();
        this.router.navigateByUrl("/compras");
    }
    carrito() {
        this.menu.close();
        this.router.navigateByUrl("/carrito");
    }
    cerrar() {
        this.sweet.showCerrarSesion();
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _servicios_sweetalert__WEBPACK_IMPORTED_MODULE_7__["ShowDialogService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
    { type: _servicios_database_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "UTcu":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _servicios_sweetalert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicios/sweetalert */ "t/Ax");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "fwsW");





let AuthGuard = class AuthGuard {
    constructor(sweet, router, storage) {
        this.sweet = sweet;
        this.router = router;
        this.storage = storage;
    }
    canActivate(next, state) {
        return this.storage.get("id").then(res => {
            if (res == null) {
                this.router.navigate(["/inicio-sesion"]);
                return false;
            }
            else {
                return true;
            }
        });
    }
};
AuthGuard.ctorParameters = () => [
    { type: _servicios_sweetalert__WEBPACK_IMPORTED_MODULE_2__["ShowDialogService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-menu menuId=\"main-menu\" content-id=\"main\">\n    <ion-header>\n      <ion-toolbar>\n        <ion-chip class=\"chip-class\">\n          <ion-avatar class=\"avatar-class\">\n            <img src=\"../assets/img/logo2.jpeg\" class=\"img-menu\">\n          </ion-avatar>\n          <ion-title>{{username}}</ion-title>\n        </ion-chip>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n      <ion-list>\n        <ion-item (click)=\"inicio()\">\n          <ion-icon  name=\"home-outline\" slot=\"start\"></ion-icon>\n          <ion-label>Inicio</ion-label>\n        </ion-item>\n        <ion-item (click)=\"planes()\">\n          <ion-icon  name=\"cash-outline\" slot=\"start\"></ion-icon>\n          <ion-label>Planes</ion-label>\n        </ion-item>\n        <ion-item (click)=\"compras()\">\n          <ion-icon name=\"card-outline\" slot=\"start\"></ion-icon>\n          <ion-label>Compras</ion-label>\n        </ion-item>\n        <ion-item (click)=\"carrito()\">\n          <ion-icon  name=\"cart\" slot=\"start\"></ion-icon>\n          <ion-label>Carro de Compra</ion-label>\n        </ion-item>\n      </ion-list>\n      <br><br>\n      <ion-list>\n        <ion-item (click)=\"cerrar()\">\n          <ion-icon  name=\"exit-outline\" slot=\"start\"></ion-icon>\n          <ion-label>Cerrar Sesión</ion-label>\n        </ion-item>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  <ion-router-outlet id=\"main\"></ion-router-outlet>\n</ion-app>\n\n\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "0QAI");














let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["firebaseConfig"]),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuthModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestoreModule"], _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_11__["IonicStorageModule"].forRoot()],
        providers: [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_12__["Camera"], _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_13__["ScreenOrientation"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "eBP1":
/*!*************************************!*\
  !*** ./src/app/share/references.ts ***!
  \*************************************/
/*! exports provided: usuario, productos, cart, pagos, estadoP, estadoC, cuenta_bancaria */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usuario", function() { return usuario; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productos", function() { return productos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cart", function() { return cart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pagos", function() { return pagos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "estadoP", function() { return estadoP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "estadoC", function() { return estadoC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cuenta_bancaria", function() { return cuenta_bancaria; });
const usuario = "usuarios";
const productos = "producto";
const cart = "carrito";
const pagos = "pagos";
const estadoP = "PENDIENTE";
const estadoC = "COMPLETADO";
const cuenta_bancaria = "cuenta_bancaria";


/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "sih+":
/*!***********************************************!*\
  !*** ./src/app/servicios/database.service.ts ***!
  \***********************************************/
/*! exports provided: DatabaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseService", function() { return DatabaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _sweetalert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sweetalert */ "t/Ax");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _share_references__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../share/references */ "eBP1");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");










let DatabaseService = class DatabaseService {
    constructor(router, storage, sweet, db, AFauth) {
        this.router = router;
        this.storage = storage;
        this.sweet = sweet;
        this.db = db;
        this.AFauth = AFauth;
    }
    storageCreate() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.storage.create();
        });
    }
    ValidateUser(usuarios, password) {
        const rou = this.router;
        const storage = this.storage;
        return this.db.collection(_share_references__WEBPACK_IMPORTED_MODULE_6__["usuario"]).ref.where("usuario", "==", usuarios).get().then(function (query) {
            if (query.empty) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    title: 'Acceso Denegado!',
                    text: 'Error, Usuario o Contraseña incorrecta',
                    icon: 'error',
                    confirmButtonText: 'Continuar'
                });
            }
            return query.forEach(function (doc) {
                // doc.data() is never undefined for query doc snapshots
                const data = doc.data();
                if (data.password == password) {
                    storage.set("id", doc.id);
                    rou.navigateByUrl("/home");
                    return true;
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                        title: 'Acceso Denegado!',
                        text: 'Error, Contraseña incorrecta',
                        icon: 'error',
                        confirmButtonText: 'Continuar'
                    });
                    return false;
                }
            });
        }).catch(err => {
            console.log(err);
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                title: 'Acceso Denegado!',
                text: 'Error, Usuario incorrecto',
                icon: 'error',
                confirmButtonText: 'Continuar'
            });
        });
    }
    getID() {
        return this.storage.get("id").then(res => {
            return res;
        });
    }
    getUserId(id) {
        return this.db.collection(_share_references__WEBPACK_IMPORTED_MODULE_6__["usuario"]).doc(id).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(usuarios => {
            return usuarios.payload.id;
        }));
    }
    getUserforId(id) {
        return this.db.collection(_share_references__WEBPACK_IMPORTED_MODULE_6__["usuario"]).doc(id).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(usuarios => {
            const data = usuarios.payload.data();
            data.id = usuarios.payload.id;
            return data;
        }));
    }
    addUser(user, nombre, apellido, correo, telefono, contrasena, foto) {
        this.AFauth.createUserWithEmailAndPassword(correo, contrasena).then(res => {
            this.db.collection(_share_references__WEBPACK_IMPORTED_MODULE_6__["usuario"]).doc(res.user.uid).set({
                usuario: user,
                nombre: nombre,
                apellido: apellido,
                correo: correo,
                telefono: telefono,
                contrasena: contrasena,
                foto: foto
            }).then(res => {
                this.sweet.showRegistro();
            });
        }).catch(err => {
            console.log(err);
            if (err.message == 'The email address is already in use by another account.') {
                this.sweet.showEmailInUse();
            }
            else if (err.message == "Password should be at least 6 characters") {
                this.sweet.showPasswordLenght();
            }
            else if (err.message == 'The email address is badly formatted.') {
                this.sweet.showEmailFormatter();
            }
        });
    }
    addCarrito(idUser, descripcion, meses, valor_mes, total, perfiles) {
        this.db.collection(_share_references__WEBPACK_IMPORTED_MODULE_6__["cart"]).doc(idUser).collection(idUser).doc().set({
            idUser: idUser,
            descripcion: descripcion,
            meses: meses,
            valor_mes: valor_mes,
            total: total,
            perfiles: perfiles,
            estado: _share_references__WEBPACK_IMPORTED_MODULE_6__["estadoP"]
        }).then(res => {
            this.sweet.showAddCarrito();
            this.router.navigateByUrl("/carrito");
        }).catch(err => {
        });
    }
    getCarrito(idUser) {
        return this.db.collection(_share_references__WEBPACK_IMPORTED_MODULE_6__["cart"]).doc(idUser).collection(idUser).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(res => {
            return res.map(ar => {
                const data = ar.payload.doc.data();
                data.id = ar.payload.doc.id;
                return data;
            });
        }));
    }
    countCarrito(idUser) {
        return this.db.collection(_share_references__WEBPACK_IMPORTED_MODULE_6__["cart"]).doc(idUser).collection(idUser).get();
    }
    getProductos() {
        return this.db.collection(_share_references__WEBPACK_IMPORTED_MODULE_6__["productos"]).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(prod => {
            return prod.map(ar => {
                const data = ar.payload.doc.data();
                data.id = ar.payload.doc.id;
                return data;
            });
        }));
    }
    getProductoID(id) {
        return this.db.collection(_share_references__WEBPACK_IMPORTED_MODULE_6__["productos"]).doc(id).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(res => {
            const data = res.payload.data();
            data.id = res.payload.id;
            return data;
        }));
    }
    deleteCarrito(id, idUser) {
        this.db.collection(_share_references__WEBPACK_IMPORTED_MODULE_6__["cart"]).doc(idUser).collection(idUser).doc(id).delete().then(res => {
            this.sweet.showDeleteCarrito();
        });
    }
    addCuentaBancaria(idUser, nombre, apellido, num_tarjeta, fecha_vencimiento, cod_seguridad) {
        this.db.collection(_share_references__WEBPACK_IMPORTED_MODULE_6__["cuenta_bancaria"]).doc(idUser).collection(idUser).add({
            idUser: idUser,
            nombre: nombre,
            apellido: apellido,
            numero_tarjeta: num_tarjeta,
            fecha_vencimiento: fecha_vencimiento,
            cvv: cod_seguridad
        }).then(res => {
            this.sweet.showAddCuentaBancaria();
        });
    }
    getCuentaBancaria(idUser) {
        return this.db.collection(_share_references__WEBPACK_IMPORTED_MODULE_6__["cuenta_bancaria"]).doc(idUser).collection(idUser).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(res => {
            return res.map(cb => {
                const data = cb.payload.doc.data();
                data.id = cb.payload.doc.id;
                return data;
            });
        }));
    }
    addPagos(id_fecha, idUser, fecha, hora, nombre, perfiles, meses, total) {
        this.db.collection(_share_references__WEBPACK_IMPORTED_MODULE_6__["pagos"]).doc(idUser).collection(idUser).doc(id_fecha).set({
            idUser: idUser,
            fecha: fecha,
            hora: hora,
            nombre: nombre,
            perfiles: perfiles,
            meses: meses,
            total: total
        }).then(res => {
            console.log("agregado");
        });
    }
    getPagos(idUser) {
        return this.db.collection(_share_references__WEBPACK_IMPORTED_MODULE_6__["pagos"]).doc(idUser).collection(idUser).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(res => {
            return res.map(pg => {
                const data = pg.payload.doc.data();
                data.id = pg.payload.doc.id;
                return data;
            });
        }));
    }
    deleteCarritoShow(idUser, idproduct) {
        this.db.collection(_share_references__WEBPACK_IMPORTED_MODULE_6__["cart"]).doc(idUser).collection(idUser).doc(idproduct).delete();
    }
};
DatabaseService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: _sweetalert__WEBPACK_IMPORTED_MODULE_3__["ShowDialogService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__["AngularFireAuth"] }
];
DatabaseService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DatabaseService);



/***/ }),

/***/ "t/Ax":
/*!*****************************************!*\
  !*** ./src/app/servicios/sweetalert.ts ***!
  \*****************************************/
/*! exports provided: ShowDialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowDialogService", function() { return ShowDialogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ "FHRc");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");







let ShowDialogService = class ShowDialogService {
    constructor(router, menu, auth, storage) {
        this.router = router;
        this.menu = menu;
        this.auth = auth;
        this.storage = storage;
    }
    showSweetError(err) {
        if (err == 'Error: The email address is badly formatted.') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: 'Error!',
                text: 'Error, El correo Electrónico tiene un formato incorrecto',
                icon: 'error',
                confirmButtonText: 'Continuar',
            });
        }
        else if (err ==
            'Error: There is no user record corresponding to this identifier. The user may have been deleted.') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: 'Error!',
                text: 'Error, Usuario incorrecto',
                icon: 'error',
                confirmButtonText: 'Continuar',
            });
        }
        else if (err ==
            'Error: The password is invalid or the user does not have a password.') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: 'Error!',
                text: 'Error, Contraseña incorrecta',
                icon: 'error',
                confirmButtonText: 'Continuar',
            });
        }
    }
    showPrueba() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Error!',
            text: 'Error, Usuario o Contraseña incorrectos',
            icon: 'error',
            confirmButtonText: 'Continuar',
        });
    }
    showLogin() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Bienvenido',
            icon: 'success',
            showConfirmButton: false,
            timer: 1800,
        }).then((res) => {
            this.router.navigateByUrl('/home');
        });
    }
    showRegistro() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Regitro Completado',
            icon: 'success',
            showConfirmButton: false,
            timer: 1800,
        }).then((res) => {
            this.router.navigateByUrl('/inicio-sesion');
        });
    }
    showSweetInfo(title, content) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: title,
            text: content,
            icon: 'info',
            timer: 2000,
        });
    }
    showBlank() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Los campos no pueden estar vacios',
            icon: 'info',
            showConfirmButton: false,
            timer: 1800,
        });
    }
    showEmailInUse() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'La dirección de correo electrónico ya está siendo utilizada por otra cuenta',
            icon: 'warning',
            showConfirmButton: false,
            showCancelButton: false,
            timer: 1800
        });
    }
    showPasswordLenght() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'La contraseña debe tener al menos 6 caracteres',
            icon: 'warning',
            showConfirmButton: false,
            showCancelButton: false,
            timer: 1800
        });
    }
    showEmailFormatter() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'La dirección de correo electrónico está mal formateada.',
            icon: 'warning',
            showConfirmButton: false,
            showCancelButton: false,
            timer: 1800
        });
    }
    showAddCarrito() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Cuenta añadida al Carrito de compra',
            icon: 'success',
            showConfirmButton: false,
            timer: 1800,
        });
    }
    showAddPagos() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Pago Exitoso',
            icon: 'success',
            showConfirmButton: false,
            timer: 1800,
        });
    }
    showAddCuentaBancaria() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Cuenta Bancaria añadida Exitosamente',
            icon: 'success',
            showConfirmButton: false,
            timer: 1800,
        });
    }
    showFailAddCarrito() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Hubo un error al intentar agregar la cuenta al carrito',
            icon: 'error',
            showConfirmButton: false,
            timer: 1800,
        });
    }
    showDeleteCarrito() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Suscripcion eliminada del carrito de compra',
            icon: 'success',
            showConfirmButton: false,
            timer: 1800,
        });
    }
    showCerrarSesion() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
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
    showDeleteQuestion(id, idUser, database) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
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
};
ShowDialogService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__["Storage"] }
];
ShowDialogService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], ShowDialogService);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/auth.guard */ "UTcu");
/* harmony import */ var _guards_no_login_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/no-login.guard */ "JlN+");





const routes = [
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ./home/home.module */ "ct+p")).then(m => m.HomePageModule), canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: '',
        redirectTo: 'inicio-sesion',
        pathMatch: 'full'
    },
    {
        path: 'inicio-sesion',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-inicio-sesion-inicio-sesion-module */ "pages-inicio-sesion-inicio-sesion-module").then(__webpack_require__.bind(null, /*! ./pages/inicio-sesion/inicio-sesion.module */ "YSpT")).then(m => m.InicioSesionPageModule),
        canActivate: [_guards_no_login_guard__WEBPACK_IMPORTED_MODULE_4__["NoLoginGuard"]]
    },
    {
        path: 'registro',
        loadChildren: () => Promise.all(/*! import() | pages-registro-registro-module */[__webpack_require__.e("default~firebase-auth~pages-registro-registro-module"), __webpack_require__.e("pages-registro-registro-module")]).then(__webpack_require__.bind(null, /*! ./pages/registro/registro.module */ "8+ML")).then(m => m.RegistroPageModule), canActivate: [_guards_no_login_guard__WEBPACK_IMPORTED_MODULE_4__["NoLoginGuard"]]
    },
    {
        path: 'forgot-password',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-forgot-password-forgot-password-module */ "pages-forgot-password-forgot-password-module").then(__webpack_require__.bind(null, /*! ./pages/forgot-password/forgot-password.module */ "7CEM")).then(m => m.ForgotPasswordPageModule)
    },
    {
        path: 'planes',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-planes-planes-module */ "pages-planes-planes-module").then(__webpack_require__.bind(null, /*! ./pages/planes/planes.module */ "sbyf")).then(m => m.PlanesPageModule), canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'plan',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-plan-plan-module */ "pages-plan-plan-module").then(__webpack_require__.bind(null, /*! ./pages/plan/plan.module */ "7QDW")).then(m => m.PlanPageModule)
    },
    {
        path: 'carrito',
        loadChildren: () => Promise.all(/*! import() | pages-carrito-carrito-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-carrito-carrito-module")]).then(__webpack_require__.bind(null, /*! ./pages/carrito/carrito.module */ "n3IK")).then(m => m.CarritoPageModule)
    },
    {
        path: 'modal-cuenta-banco',
        loadChildren: () => __webpack_require__.e(/*! import() | modals-modal-cuenta-banco-modal-cuenta-banco-module */ "common").then(__webpack_require__.bind(null, /*! ./modals/modal-cuenta-banco/modal-cuenta-banco.module */ "rAQh")).then(m => m.ModalCuentaBancoPageModule)
    },
    {
        path: 'compras',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-compras-compras-module */ "pages-compras-compras-module").then(__webpack_require__.bind(null, /*! ./pages/compras/compras.module */ "rIvi")).then(m => m.ComprasPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img.img-menu {\n  width: 100%;\n  height: 100%;\n}\n\nion-chip.chip-class {\n  width: 96%;\n  height: 100%;\n  background: transparent;\n}\n\nion-avatar.avatar-class {\n  width: 50%;\n  height: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFDQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFFSjs7QUFBQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FBR0oiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nLmltZy1tZW51e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuaW9uLWNoaXAuY2hpcC1jbGFzc3tcclxuICAgIHdpZHRoOiA5NiU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5pb24tYXZhdGFyLmF2YXRhci1jbGFzc3tcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map