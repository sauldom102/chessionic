webpackJsonp([9],{

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Jugador; });
var Jugador = /** @class */ (function () {
    function Jugador(id, nombre, apellidos, elo, telefono, partidas, pc, pf, ganadas, empatadas, perdidas, puntos) {
        this.id = id;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.elo = elo;
        this.telefono = telefono;
        this.partidas = partidas;
        this.pc = pc;
        this.pf = pf;
        this.ganadas = ganadas;
        this.empatadas = empatadas;
        this.perdidas = perdidas;
        this.puntos = puntos;
    }
    return Jugador;
}());

//# sourceMappingURL=jugador.model.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(afAuth) {
        var _this = this;
        this.afAuth = afAuth;
        afAuth.authState.subscribe(function (user) {
            _this.user = user;
        });
    }
    AuthService.prototype.signInWithEmail = function (credentials) {
        console.log('Sign in with email');
        return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["AngularFireAuth"]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EquiposAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EquiposAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EquiposAddPage = /** @class */ (function () {
    function EquiposAddPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EquiposAddPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EquiposAddPage');
    };
    EquiposAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-equipos-add',template:/*ion-inline-start:"/media/DATA/DAM/Colegio/Segundo/Ionic/chessionic/src/pages/equipos-add/equipos-add.html"*/'<!--\n  Generated template for the EquiposAddPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar  color="primary">\n    <ion-title>CONFIGURAR EQUIPO</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/media/DATA/DAM/Colegio/Segundo/Ionic/chessionic/src/pages/equipos-add/equipos-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], EquiposAddPage);
    return EquiposAddPage;
}());

//# sourceMappingURL=equipos-add.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JugadoresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jugadores_add_jugadores_add__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jugadores_list_jugadores_list__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//Servicios


/**
 * Generated class for the JugadoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var JugadoresPage = /** @class */ (function () {
    function JugadoresPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.jugadoraddboton = __WEBPACK_IMPORTED_MODULE_2__jugadores_add_jugadores_add__["a" /* JugadoresAddPage */]; //Variable para adjuntar en navpush del boton html
        this.jugadorlistboton = __WEBPACK_IMPORTED_MODULE_3__jugadores_list_jugadores_list__["a" /* JugadoresListPage */];
    }
    JugadoresPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JugadoresPage');
    };
    JugadoresPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jugadores',template:/*ion-inline-start:"/media/DATA/DAM/Colegio/Segundo/Ionic/chessionic/src/pages/jugadores/jugadores.html"*/'<!--\n  Generated template for the JugadoresPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Jugadores</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding >\n  <img src="assets/imgs/jugador.png"><br>\n      <button ion-button color="secondary" [navPush] = "jugadorlistboton">  <ion-icon name="list"></ion-icon> LISTAR JUGADOR </button>\n      <button ion-button color="secondary" [navPush] = "jugadoraddboton"> <ion-icon name="create"></ion-icon> AÑADIR JUGADOR </button>\n      <br>\n</ion-content>\n'/*ion-inline-end:"/media/DATA/DAM/Colegio/Segundo/Ionic/chessionic/src/pages/jugadores/jugadores.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], JugadoresPage);
    return JugadoresPage;
}());

//# sourceMappingURL=jugadores.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JugadoresAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_jugadores_jugadores__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_jugador_model__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__jugadores_jugadores__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//Servicios



var JugadoresAddPage = /** @class */ (function () {
    function JugadoresAddPage(navCtrl, navParams, _jugadoresProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._jugadoresProvider = _jugadoresProvider;
        this.addJugadorForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]().group({
            id: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            nombre: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            apellidos: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            telefono: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
        });
    }
    JugadoresAddPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JugadoresAddPage');
    };
    JugadoresAddPage.prototype.addJugador = function () {
        var jugador = new __WEBPACK_IMPORTED_MODULE_4__models_jugador_model__["a" /* Jugador */](this.addJugadorForm.controls['id'].value, this.addJugadorForm.controls['nombre'].value, this.addJugadorForm.controls['apellidos'].value, this.addJugadorForm.controls['telefono'].value, 0, 0, 0, 0, 0, 0, 0, 0);
        this._jugadoresProvider.addJugador(jugador);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__jugadores_jugadores__["a" /* JugadoresPage */]);
    };
    JugadoresAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jugadores-add',template:/*ion-inline-start:"/media/DATA/DAM/Colegio/Segundo/Ionic/chessionic/src/pages/jugadores-add/jugadores-add.html"*/'<!--\n  Generated template for the JugadoresAddPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Añadir Jugador</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <form [formGroup]="addJugadorForm" (ngSubmit)="addJugador(addJugadorForm.value)">\n        \n        <ion-item>\n          <ion-label>ID</ion-label>\n          <ion-input type="number" formControlName="id"></ion-input>\n        </ion-item>\n        \n        <ion-item>\n          <ion-label>Nombre</ion-label>\n          <ion-input type="text" formControlName="nombre"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label>Apellidos</ion-label>\n            <ion-input type="text" formControlName="apellidos"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label>Telefono</ion-label>\n            <ion-input type="number" formControlName="telefono"></ion-input>\n        </ion-item>\n\n        <button ion-button type="submit" color="green">AÑADIR JUGADOR</button>\n      </form>\n\n</ion-content>\n'/*ion-inline-end:"/media/DATA/DAM/Colegio/Segundo/Ionic/chessionic/src/pages/jugadores-add/jugadores-add.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_jugadores_jugadores__["a" /* JugadoresProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_jugadores_jugadores__["a" /* JugadoresProvider */]) === "function" && _c || Object])
    ], JugadoresAddPage);
    return JugadoresAddPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=jugadores-add.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JugadoresDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_jugadores_jugadores__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jugadores_list_jugadores_list__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var JugadoresDetailsPage = /** @class */ (function () {
    function JugadoresDetailsPage(navCtrl, navParams, _jugadoresProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._jugadoresProvider = _jugadoresProvider;
        this.jugadordetailsvolverboton = __WEBPACK_IMPORTED_MODULE_4__jugadores_list_jugadores_list__["a" /* JugadoresListPage */];
        this.indexJugador = this.navParams.get("i");
        this.jugador = this._jugadoresProvider.getById(this.indexJugador);
        this.jugadorForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]().group({
            nombre: [this.jugador.nombre, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            apellidos: [this.jugador.apellidos, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            telefono: [this.jugador.telefono, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            elo: [this.jugador.elo, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            partidas: [this.jugador.partidas, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            pc: [this.jugador.pc, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            pf: [this.jugador.pf, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            ganadas: [this.jugador.ganadas, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            empatadas: [this.jugador.empatadas, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            perdidas: [this.jugador.perdidas, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            puntos: [this.jugador.puntos, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
    }
    JugadoresDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JugadoresDetailsPage');
    };
    JugadoresDetailsPage.prototype.editJugador = function () {
        var _this = this;
        Object.keys(this.jugadorForm.controls).forEach(function (k) {
            _this.jugador[k] = _this.jugadorForm.controls[k].value;
        });
    };
    JugadoresDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jugadores-details',template:/*ion-inline-start:"/media/DATA/DAM/Colegio/Segundo/Ionic/chessionic/src/pages/jugadores-details/jugadores-details.html"*/'<!--\n  Generated template for the JugadoresDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Edición</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <!-- <ion-list>\n        <ion-item ion-item>\n         Nombre: {{ _jugadoresProvider._jugadores[indexjugadores].nombre}} {{ _jugadoresProvider._jugadores[indexjugadores].apellidos }} <br>\n         ELO: {{ _jugadoresProvider._jugadores[indexjugadores].elo }} Puntos: {{ _jugadoresProvider._jugadores[indexjugadores].puntos }} Telefono: {{ _jugadoresProvider._jugadores[indexjugadores].telefono }} <br> \n         Partidas: {{ _jugadoresProvider._jugadores[indexjugadores].partidas }} PC: {{ _jugadoresProvider._jugadores[indexjugadores].pc }}  PF: {{ _jugadoresProvider._jugadores[indexjugadores].pf }} <br> \n         Ganadas: {{ _jugadoresProvider._jugadores[indexjugadores].ganadas }} Empatadas: {{ _jugadoresProvider._jugadores[indexjugadores].empatadas }} Perdidas: {{ _jugadoresProvider._jugadores[indexjugadores].perdidas }} <br> \n        </ion-item>  \n      </ion-list> -->\n\n      <form [formGroup]="jugadorForm" (ngSubmit)="editJugador(jugadorForm.value)">\n        \n          <!-- <ion-item>\n            <ion-label>ID</ion-label>\n            <ion-input type="number" [(ngModel)]="id" name="id" value=""></ion-input>\n          </ion-item> -->\n          \n          <ion-item>\n            <ion-label>Nombre</ion-label>\n            <ion-input type="text" formControlName="nombre" required></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label>Apellidos</ion-label>\n              <ion-input type="text" formControlName="apellidos" required></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label>Telefono</ion-label>\n              <ion-input type="number" formControlName="telefono" required></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label>ELO</ion-label>\n              <ion-input type="number" formControlName="elo" required></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label>Partidas Jugadas</ion-label>\n              <ion-input type="number" formControlName="partidas" required></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label>Partidos Local</ion-label>\n              <ion-input type="number" formControlName="pc" required></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label>Partidas Fuera</ion-label>\n              <ion-input type="number" formControlName="pf" required></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label>Partidas Ganadas</ion-label>\n              <ion-input type="number" formControlName="ganadas" required></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label>Partidas Empatadas</ion-label>\n              <ion-input type="number" formControlName="empatadas" required></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label>Partidas Perdidas</ion-label>\n              <ion-input type="number" formControlName="perdidas" required></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label>Puntuacion</ion-label>\n              <ion-input type="number" formControlName="puntos" required></ion-input>\n          </ion-item>\n  \n          <button ion-button type="submit" color="yellow"><ion-icon name="build"></ion-icon>  EDITAR JUGADOR</button>\n          <button ion-button color="primary" [navPush] = "jugadordetailsvolverboton"> VOLVER </button>\n        </form>\n</ion-content>\n'/*ion-inline-end:"/media/DATA/DAM/Colegio/Segundo/Ionic/chessionic/src/pages/jugadores-details/jugadores-details.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_jugadores_jugadores__["a" /* JugadoresProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_jugadores_jugadores__["a" /* JugadoresProvider */]) === "function" && _c || Object])
    ], JugadoresDetailsPage);
    return JugadoresDetailsPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=jugadores-details.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NuevaJornadaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the NuevaJornadaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NuevaJornadaPage = /** @class */ (function () {
    function NuevaJornadaPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.jornadaForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]().group({
            fecha: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[0-9]{4}-[0-9]{2}-[0-9]{2}')])],
            equipo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,])]
        });
    }
    NuevaJornadaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NuevaJornadaPage');
    };
    NuevaJornadaPage.prototype.submitJornada = function () {
        var _this = this;
        var data = {};
        Object.keys(this.jornadaForm.controls).forEach(function (k) {
            data[k] = _this.jornadaForm.controls[k].value;
        });
        console.log(data);
        this.exit(data);
    };
    NuevaJornadaPage.prototype.exit = function (data) {
        if (data === void 0) { data = null; }
        this.viewCtrl.dismiss(data);
    };
    NuevaJornadaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nueva-jornada',template:/*ion-inline-start:"/media/DATA/DAM/Colegio/Segundo/Ionic/chessionic/src/pages/nueva-jornada/nueva-jornada.html"*/'<!--\n  Generated template for the NuevaJornadaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Nueva jornada</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color="royal" (click)="exit()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="jornadaForm" (ngSubmit)="submitJornada(jornadaForm.value)">\n    <ion-item [ngClass]="{\'error-border\':!jornadaForm.controls.fecha.valid && jornadaForm.controls.fecha.touched}">\n      <ion-label fixed>Fecha</ion-label>\n      <ion-input type="date" formControlName="fecha" required></ion-input>\n	</ion-item>\n	<p *ngIf="jornadaForm.controls.fecha.hasError(\'required\') && jornadaForm.controls.fecha.touched" class="error">Debes introducir una fecha</p>\n	\n	<ion-item>\n		<ion-label>Equipo</ion-label>\n		<ion-select formControlName="equipo" required>\n\n		</ion-select>\n	</ion-item>\n	\n	<div padding>\n      <button type="submit" [disabled]="!jornadaForm.valid" ion-button block>Guardar</button>\n    </div>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/media/DATA/DAM/Colegio/Segundo/Ionic/chessionic/src/pages/nueva-jornada/nueva-jornada.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]])
    ], NuevaJornadaPage);
    return NuevaJornadaPage;
}());

//# sourceMappingURL=nueva-jornada.js.map

/***/ }),

/***/ 168:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 168;

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/equipos-add/equipos-add.module": [
		704,
		8
	],
	"../pages/equipos/equipos.module": [
		705,
		7
	],
	"../pages/jornadas/jornadas.module": [
		706,
		6
	],
	"../pages/jugadores-add/jugadores-add.module": [
		707,
		5
	],
	"../pages/jugadores-details/jugadores-details.module": [
		708,
		4
	],
	"../pages/jugadores-list/jugadores-list.module": [
		709,
		3
	],
	"../pages/jugadores/jugadores.module": [
		710,
		2
	],
	"../pages/login/login.module": [
		711,
		1
	],
	"../pages/nueva-jornada/nueva-jornada.module": [
		712,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 213;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EquiposProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_jugador_model__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EquiposProvider = /** @class */ (function () {
    function EquiposProvider() {
        this._equipo = [new __WEBPACK_IMPORTED_MODULE_1__models_jugador_model__["a" /* Jugador */](0, "Antonio", "Ruiz Ortega", 100, 661123456, 0, 0, 0, 0, 0, 0, 0),
            new __WEBPACK_IMPORTED_MODULE_1__models_jugador_model__["a" /* Jugador */](1, "Manuel", "Perez Matos", 200, 678342178, 0, 0, 0, 0, 0, 0, 0),
            new __WEBPACK_IMPORTED_MODULE_1__models_jugador_model__["a" /* Jugador */](2, "Pedro", "Sanchez Castejon", 50, 956456823, 0, 0, 0, 0, 0, 0, 0),
            new __WEBPACK_IMPORTED_MODULE_1__models_jugador_model__["a" /* Jugador */](3, "Maria Dolores", "Cospedal", 250, 956882245, 0, 0, 0, 0, 0, 0, 0),
            new __WEBPACK_IMPORTED_MODULE_1__models_jugador_model__["a" /* Jugador */](4, "Rita", "Maestre", 400, 678340981, 0, 0, 0, 0, 0, 0, 0)];
        console.log('Hello EquiposProvider Provider');
    }
    EquiposProvider.prototype.cargar_equipo = function () {
        return this._equipo;
    };
    EquiposProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], EquiposProvider);
    return EquiposProvider;
}());

//# sourceMappingURL=equipos.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_pages__ = __webpack_require__(73);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.tab1 = __WEBPACK_IMPORTED_MODULE_2__index_pages__["h" /* JugadoresPage */];
        this.tab2 = __WEBPACK_IMPORTED_MODULE_2__index_pages__["b" /* EquiposPage */];
        this.tab3 = __WEBPACK_IMPORTED_MODULE_2__index_pages__["d" /* JornadasPage */];
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',
            template: "\n\t<ion-tabs color=\"primary\" selectedIndex=\"0\">\n\t\t<ion-tab tabIcon=\"people\" tabTitle=\"Jugadores\" [root]=\"tab1\"></ion-tab>\n\t\t<ion-tab tabIcon=\"contacts\" tabTitle=\"Equipos\" [root]=\"tab2\"></ion-tab>\n\t\t<ion-tab tabIcon=\"calendar\" tabTitle=\"Jornadas\" [root]=\"tab3\"></ion-tab>\n\t</ion-tabs>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EquiposPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_equipos_equipos__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__equipos_add_equipos_add__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//Servicios


/**
 * Generated class for the EquiposPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EquiposPage = /** @class */ (function () {
    function EquiposPage(navCtrl, navParams, _equiposProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._equiposProvider = _equiposProvider;
        this.hacerequipoboton = __WEBPACK_IMPORTED_MODULE_3__equipos_add_equipos_add__["a" /* EquiposAddPage */]; //Variable para adjuntar en navpush del boton html
    }
    EquiposPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EquiposPage');
    };
    EquiposPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-equipos',template:/*ion-inline-start:"/media/DATA/DAM/Colegio/Segundo/Ionic/chessionic/src/pages/equipos/equipos.html"*/'<!--\n  Generated template for the EquiposPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Equipos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <img src="assets/imgs/equipo.png"><br>\n\n    <button ion-button color="secondary" [navPush] = "hacerequipoboton"> HACER EQUIPO </button>\n\n    <ion-item ion-item *ngFor="let equipo of this._equiposProvider.cargar_equipo(); let i=index">\n        Nombre: {{ equipo.nombre }} {{ equipo.apellidos }}<br> ELO: {{ equipo.elo }} <br> Index: {{i}} <br>\n        \n           \n           \n       </ion-item>  \n\n   \n    \n\n    \n\n</ion-content>\n'/*ion-inline-end:"/media/DATA/DAM/Colegio/Segundo/Ionic/chessionic/src/pages/equipos/equipos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_equipos_equipos__["a" /* EquiposProvider */]])
    ], EquiposPage);
    return EquiposPage;
}());

//# sourceMappingURL=equipos.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JornadasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_pages__ = __webpack_require__(73);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JornadasPage = /** @class */ (function () {
    function JornadasPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.jornadas = [];
    }
    JornadasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JornadasPage');
    };
    JornadasPage.prototype.modalNewJornada = function () {
        var _this = this;
        var modalNewJornada = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__index_pages__["j" /* NuevaJornadaPage */]);
        modalNewJornada.onDidDismiss(function (data) {
            if (data)
                _this.jornadas.push(data);
        });
        modalNewJornada.present();
    };
    JornadasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jornadas',template:/*ion-inline-start:"/media/DATA/DAM/Colegio/Segundo/Ionic/chessionic/src/pages/jornadas/jornadas.html"*/'<!--\n  Generated template for the JornadasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n	<ion-title>Jornadas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n		<img src="assets/imgs/jornadas.png"><br>\n	<ion-list>\n		<ion-card class="jornada-card" *ngFor="let jornada of jornadas">\n			<ion-card-header>\n				{{ jornada.fecha }}\n			</ion-card-header>\n			\n			<ion-card-content>\n				<!-- Add card content here! -->\n			</ion-card-content>\n		</ion-card>\n	</ion-list>\n\n	<ion-fab right bottom>\n		<button ion-fab color="secondary" (click)="modalNewJornada()"><ion-icon name="add"></ion-icon></button>\n	  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/media/DATA/DAM/Colegio/Segundo/Ionic/chessionic/src/pages/jornadas/jornadas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], JornadasPage);
    return JornadasPage;
}());

//# sourceMappingURL=jornadas.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.user = { username: '', password: '' };
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.submitLogin = function () {
        var _this = this;
        var credentials = {
            email: this.user.username,
            password: this.user.password
        };
        this.auth.signInWithEmail(credentials)
            .then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]); }, function (error) { return _this.loginError = error.message; });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/media/DATA/DAM/Colegio/Segundo/Ionic/chessionic/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n	\n<ion-content padding>\n	<form (ngSubmit)="submitLogin()">\n		<ion-item>\n			<ion-label floating>Usuario</ion-label>\n			<ion-input type="text" [(ngModel)]="user.username" name="username"></ion-input>\n		</ion-item>\n		<ion-item>\n			<ion-label floating>Contraseña</ion-label>\n			<ion-input type="password" [(ngModel)]="user.password" name="password"></ion-input>\n		</ion-item>\n		<div padding>\n			<button type="submit" ion-button outline block>Entrar</button>\n		</div>\n	</form>\n</ion-content>\n'/*ion-inline-end:"/media/DATA/DAM/Colegio/Segundo/Ionic/chessionic/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(365);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_index_pages__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_nueva_jornada_nueva_jornada__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__firebaseConfig__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_auth_service__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_jugadores_jugadores__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_equipos_equipos__ = __webpack_require__(214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_pages__["c" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_pages__["i" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_pages__["d" /* JornadasPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_pages__["b" /* EquiposPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_pages__["a" /* EquiposAddPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_pages__["h" /* JugadoresPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_pages__["e" /* JugadoresAddPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_pages__["g" /* JugadoresListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_pages__["f" /* JugadoresDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_nueva_jornada_nueva_jornada__["a" /* NuevaJornadaPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/equipos-add/equipos-add.module#EquiposAddPageModule', name: 'EquiposAddPage', segment: 'equipos-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/equipos/equipos.module#EquiposPageModule', name: 'EquiposPage', segment: 'equipos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jornadas/jornadas.module#JornadasPageModule', name: 'JornadasPage', segment: 'jornadas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jugadores-add/jugadores-add.module#JugadoresAddPageModule', name: 'JugadoresAddPage', segment: 'jugadores-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jugadores-details/jugadores-details.module#JugadoresDetailsPageModule', name: 'JugadoresDetailsPage', segment: 'jugadores-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jugadores-list/jugadores-list.module#JugadoresListPageModule', name: 'JugadoresListPage', segment: 'jugadores-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jugadores/jugadores.module#JugadoresPageModule', name: 'JugadoresPage', segment: 'jugadores', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nueva-jornada/nueva-jornada.module#NuevaJornadaPageModule', name: 'NuevaJornadaPage', segment: 'nueva-jornada', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_8_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_10__firebaseConfig__["a" /* default */])
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_pages__["c" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_pages__["i" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_pages__["d" /* JornadasPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_pages__["b" /* EquiposPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_pages__["a" /* EquiposAddPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_pages__["h" /* JugadoresPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_pages__["e" /* JugadoresAddPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_pages__["g" /* JugadoresListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_pages__["f" /* JugadoresDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_nueva_jornada_nueva_jornada__["a" /* NuevaJornadaPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__["AngularFireAuth"],
                __WEBPACK_IMPORTED_MODULE_12__providers_jugadores_jugadores__["a" /* JugadoresProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_equipos_equipos__["a" /* EquiposProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JUGADORESINICIALES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_jugador_model__ = __webpack_require__(115);

var JUGADORESINICIALES = [new __WEBPACK_IMPORTED_MODULE_0__models_jugador_model__["a" /* Jugador */](0, "Antonio", "Ruiz Ortega", 100, 661123456, 0, 0, 0, 0, 0, 0, 0),
    new __WEBPACK_IMPORTED_MODULE_0__models_jugador_model__["a" /* Jugador */](1, "Manuel", "Perez Matos", 200, 678342178, 0, 0, 0, 0, 0, 0, 0),
    new __WEBPACK_IMPORTED_MODULE_0__models_jugador_model__["a" /* Jugador */](2, "Pedro", "Sanchez Castejon", 50, 956456823, 0, 0, 0, 0, 0, 0, 0),
    new __WEBPACK_IMPORTED_MODULE_0__models_jugador_model__["a" /* Jugador */](3, "Maria Dolores", "Cospedal", 250, 956882245, 0, 0, 0, 0, 0, 0, 0),
    new __WEBPACK_IMPORTED_MODULE_0__models_jugador_model__["a" /* Jugador */](4, "Rita", "Maestre", 400, 678340981, 0, 0, 0, 0, 0, 0, 0)];
//# sourceMappingURL=data.jugadores.js.map

/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_index_pages__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, auth) {
        this.auth = auth;
        // rootPage:any = LoginPage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_index_pages__["c" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/media/DATA/DAM/Colegio/Segundo/Ionic/chessionic/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/media/DATA/DAM/Colegio/Segundo/Ionic/chessionic/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    apiKey: "AIzaSyB16zuOI05k6AnIRo7RhWslQv-8XkOliRM",
    authDomain: "chessionic.firebaseapp.com",
    databaseURL: "https://chessionic.firebaseio.com",
    projectId: "chessionic",
    storageBucket: "chessionic.appspot.com",
    messagingSenderId: "176711296255"
});
//# sourceMappingURL=firebaseConfig.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(215);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__home_home__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jugadores_jugadores__ = __webpack_require__(154);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_1__jugadores_jugadores__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jugadores_add_jugadores_add__ = __webpack_require__(155);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__jugadores_add_jugadores_add__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jugadores_list_jugadores_list__ = __webpack_require__(87);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_3__jugadores_list_jugadores_list__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jugadores_details_jugadores_details__ = __webpack_require__(156);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_4__jugadores_details_jugadores_details__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__equipos_equipos__ = __webpack_require__(357);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__equipos_equipos__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__equipos_add_equipos_add__ = __webpack_require__(153);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_6__equipos_add_equipos_add__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__jornadas_jornadas__ = __webpack_require__(358);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_7__jornadas_jornadas__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login__ = __webpack_require__(359);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_8__login_login__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__nueva_jornada_nueva_jornada__ = __webpack_require__(157);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_9__nueva_jornada_nueva_jornada__["a"]; });










//# sourceMappingURL=index.pages.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JugadoresProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_data_jugadores__ = __webpack_require__(385);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JugadoresProvider = /** @class */ (function () {
    function JugadoresProvider() {
        this._jugadores = __WEBPACK_IMPORTED_MODULE_1__data_data_jugadores__["a" /* JUGADORESINICIALES */];
        console.log('Hello Jugadores Provider Provider');
    }
    JugadoresProvider.prototype.cargar_jugadores = function () {
        return this._jugadores;
    };
    JugadoresProvider.prototype.getById = function (jugadorId) {
        return this._jugadores.find(function (jugador) { return jugador.id == jugadorId; });
    };
    JugadoresProvider.prototype.addJugador = function (Jugador) {
        this._jugadores.unshift(Jugador);
    };
    JugadoresProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], JugadoresProvider);
    return JugadoresProvider;
}());

//# sourceMappingURL=jugadores.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JugadoresListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_jugadores_jugadores__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jugadores_details_jugadores_details__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//Servicios


var JugadoresListPage = /** @class */ (function () {
    function JugadoresListPage(navCtrl, navParams, _jugadoresProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._jugadoresProvider = _jugadoresProvider;
        this.jugadordetailsboton = __WEBPACK_IMPORTED_MODULE_3__jugadores_details_jugadores_details__["a" /* JugadoresDetailsPage */];
        //PRUEBA INSERCION this._jugadoresProvider.agregar_jugadores(10,"AMOR", "AMOR",956234876,50,0,0,0,0,0,0,0); 
        // this._jugadoresProvider.agregar_jugadores(12,"AMORCITO", "AMORCITO",956234876,50,0,0,0,0,0,0,0);
    }
    JugadoresListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JugadoresListPage');
    };
    JugadoresListPage.prototype.listarJugadores = function () {
        console.log(this._jugadoresProvider.cargar_jugadores());
    };
    JugadoresListPage.prototype.borrarJugador = function (idx) {
        this._jugadoresProvider._jugadores.splice(idx, 1);
    };
    JugadoresListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jugadores-list',template:/*ion-inline-start:"/media/DATA/DAM/Colegio/Segundo/Ionic/chessionic/src/pages/jugadores-list/jugadores-list.html"*/'<!--\n  Generated template for the JugadoresListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Listar Jugadores</ion-title>\n  </ion-navbar>\n\n  \n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-list>\n        <ion-item ion-item *ngFor="let jugador of this._jugadoresProvider.cargar_jugadores(); let i=index" (click)="listarJugadores()">\n         Nombre: {{ jugador.nombre }} {{ jugador.apellidos }}<br> ELO: {{ jugador.elo }} <br> Index: {{i}} <br>\n         \n            <button ion-button color="danger" (click)="borrarJugador(i)" >\n            \n            <ion-icon name="trash"></ion-icon>\n            Borrar\n            </button>\n\n            <button ion-button color="yellow" [navPush] = "jugadordetailsboton" [navParams]="{\'i\':i}"> \n            <ion-icon name="build"></ion-icon>  \n            EDITAR </button>\n            \n        </ion-item>  \n      </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/media/DATA/DAM/Colegio/Segundo/Ionic/chessionic/src/pages/jugadores-list/jugadores-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_jugadores_jugadores__["a" /* JugadoresProvider */]])
    ], JugadoresListPage);
    return JugadoresListPage;
}());

//# sourceMappingURL=jugadores-list.js.map

/***/ })

},[360]);
//# sourceMappingURL=main.js.map