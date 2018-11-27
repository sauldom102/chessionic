webpackJsonp([11],{

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(219);
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

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EquiposAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_equipos_equipos__ = __webpack_require__(46);
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
    function EquiposAddPage(navCtrl, navParams, _equiposProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._equiposProvider = _equiposProvider;
    }
    EquiposAddPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EquiposAddPage');
    };
    EquiposAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-equipos-add',template:/*ion-inline-start:"c:\Proyectos\Ionic\chessionic\src\pages\equipos-add\equipos-add.html"*/'<!--\n\n  Generated template for the EquiposAddPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar  color="primary">\n\n    <ion-title>CONFIGURAR EQUIPO</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n        <ion-card *ngFor="let equipo of _equiposProvider.cargar_equipos(); let i=index">\n\n			<ion-card-header>\n\n				      {{ equipo.nombre }}\n\n			</ion-card-header>\n\n			<ion-card-content>\n\n         Capitan: {{ equipo.jugadores[i].nombre }} {{ equipo.jugadores[i].apellidos }} <br /> Telefono: {{ equipo.jugadores[i].telefono }}<br />\n\n         \n\n        </ion-card-content>\n\n        \n\n        </ion-card>  \n\n\n\n        \n\n      </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"c:\Proyectos\Ionic\chessionic\src\pages\equipos-add\equipos-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_equipos_equipos__["a" /* EquiposProvider */]])
    ], EquiposAddPage);
    return EquiposAddPage;
}());

//# sourceMappingURL=equipos-add.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartidasAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_partida_model__ = __webpack_require__(216);
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
 * Generated class for the PartidasAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PartidasAddPage = /** @class */ (function () {
    function PartidasAddPage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.jornada = navParams.get('jornada');
        this.jornadaIdx = navParams.get('jornadaIdx');
        this.partidaForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]().group({
            jugador: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,])],
            resultado: ['por jugar', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,])],
        });
    }
    PartidasAddPage.prototype.submitPartida = function () {
        if (this.jornada.partidas.length < 7) {
            if (this.partidaForm.valid) {
                var jugadorId = this.partidaForm.controls['jugador'].value;
                var resultado = this.partidaForm.controls['resultado'].value;
                this.jornada.addPartida(new __WEBPACK_IMPORTED_MODULE_3__models_partida_model__["a" /* default */](this.jornada.equipo.getJugadorById(jugadorId), resultado));
            }
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'No es posible agregar más partidas puesto que ya se ha alcanzado el máximo',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
        this.navCtrl.pop();
    };
    PartidasAddPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PartidasAddPage');
    };
    PartidasAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-partidas-add',template:/*ion-inline-start:"c:\Proyectos\Ionic\chessionic\src\pages\partidas-add\partidas-add.html"*/'<!--\n\n  Generated template for the PartidasAddPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Agregar partida a jornada {{ this.jornadaIdx + 1 }}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	<form [formGroup]="partidaForm" (ngSubmit)="submitPartida(partidaForm.value)">\n\n    \n\n	<ion-item>\n\n		<ion-label>Jugador*</ion-label>\n\n		<ion-select formControlName="jugador" required>\n\n			<ion-option *ngFor="let jugador of this.jornada.equipo.jugadores" value="{{ jugador.cod }}">{{ jugador.getFullName() }}</ion-option>\n\n		</ion-select>\n\n		<p *ngIf="!partidaForm.valid">Hola</p>\n\n	</ion-item>\n\n\n\n	<ion-item>\n\n		<ion-label>Resultado*</ion-label>\n\n		<ion-select formControlName="resultado" required>\n\n			<ion-option value="por jugar">por jugar</ion-option>\n\n			<ion-option value="ganada">ganada</ion-option>\n\n			<ion-option value="empatada">empatada</ion-option>\n\n			<ion-option value="perdida">perdida</ion-option>\n\n		</ion-select>\n\n	</ion-item>\n\n	\n\n	<div padding>\n\n      <button type="submit" [disabled]="!partidaForm.valid" ion-button block>Agregar</button>\n\n    </div>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"c:\Proyectos\Ionic\chessionic\src\pages\partidas-add\partidas-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], PartidasAddPage);
    return PartidasAddPage;
}());

//# sourceMappingURL=partidas-add.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JugadoresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jugadores_add_jugadores_add__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jugadores_list_jugadores_list__ = __webpack_require__(89);
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
            selector: 'page-jugadores',template:/*ion-inline-start:"c:\Proyectos\Ionic\chessionic\src\pages\jugadores\jugadores.html"*/'<!--\n\n  Generated template for the JugadoresPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Jugadores</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding >\n\n  <img src="assets/imgs/jugador.png" /><br/>\n\n      <button ion-button color="secondary" [navPush] = "jugadorlistboton" msla>  <ion-icon name="list"></ion-icon> LISTAR JUGADOR </button>\n\n      <button ion-button color="secondary" [navPush] = "jugadoraddboton"> <ion-icon name="create"></ion-icon> AÑADIR JUGADOR </button>\n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"c:\Proyectos\Ionic\chessionic\src\pages\jugadores\jugadores.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], JugadoresPage);
    return JugadoresPage;
}());

//# sourceMappingURL=jugadores.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JugadoresAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_jugadores_jugadores__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_jugador_model__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__jugadores_jugadores__ = __webpack_require__(156);
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
        var jugador = new __WEBPACK_IMPORTED_MODULE_4__models_jugador_model__["a" /* Jugador */](this.addJugadorForm.controls['id'].value, this.addJugadorForm.controls['nombre'].value, this.addJugadorForm.controls['apellidos'].value, this.addJugadorForm.controls['telefono'].value);
        this._jugadoresProvider.addJugador(jugador);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__jugadores_jugadores__["a" /* JugadoresPage */]);
    };
    JugadoresAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jugadores-add',template:/*ion-inline-start:"c:\Proyectos\Ionic\chessionic\src\pages\jugadores-add\jugadores-add.html"*/'<!--\n\n  Generated template for the JugadoresAddPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Añadir Jugador</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n    <form [formGroup]="addJugadorForm" (ngSubmit)="addJugador(addJugadorForm.value)">\n\n        \n\n        <ion-item>\n\n          <ion-label>ID</ion-label>\n\n          <ion-input type="number" formControlName="id"></ion-input>\n\n        </ion-item>\n\n        \n\n        <ion-item>\n\n          <ion-label>Nombre</ion-label>\n\n          <ion-input type="text" formControlName="nombre"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label>Apellidos</ion-label>\n\n            <ion-input type="text" formControlName="apellidos"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label>Telefono</ion-label>\n\n            <ion-input type="number" formControlName="telefono"></ion-input>\n\n        </ion-item>\n\n\n\n		<div padding>\n\n			<button ion-button type="submit" color="green">Guardar</button>\n\n		</div>    \n\n      </form>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"c:\Proyectos\Ionic\chessionic\src\pages\jugadores-add\jugadores-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_jugadores_jugadores__["a" /* JugadoresProvider */]])
    ], JugadoresAddPage);
    return JugadoresAddPage;
}());

//# sourceMappingURL=jugadores-add.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JugadoresDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_jugadores_jugadores__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jugadores_list_jugadores_list__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_jornadas_jornadas__ = __webpack_require__(38);
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
    function JugadoresDetailsPage(navCtrl, navParams, _jugadoresProvider, _jornadasProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._jugadoresProvider = _jugadoresProvider;
        this._jornadasProvider = _jornadasProvider;
        this.jugadordetailsvolverboton = __WEBPACK_IMPORTED_MODULE_4__jugadores_list_jugadores_list__["a" /* JugadoresListPage */];
        this.indexJugador = this.navParams.get("i");
        this.jugador = this._jugadoresProvider.getById(this.indexJugador);
        this.jugador.partidas = _jugadoresProvider.partidas(this.jugador.cod);
        this.jugador.ganadas = _jugadoresProvider.ganadas(this.jugador.cod);
        this.jugador.empatadas = _jugadoresProvider.empatadas(this.jugador.cod);
        this.jugador.perdidas = _jugadoresProvider.perdidas(this.jugador.cod);
        this.jugador.puntos = this.jugador.ganadas + 0.5 * this.jugador.empatadas;
        var wd = this._jornadasProvider.getJornadasByJugadorId(this.jugador.cod);
        this.jugador.pc = 0;
        this.jugador.pf = 0;
        wd.forEach(function (_wd) {
            _wd.partidas.forEach(function (p) {
                if (p.jugador.cod == _this.jugador.cod) {
                    if (_wd.local)
                        _this.jugador.pc++;
                    else
                        _this.jugador.pf++;
                }
            });
        });
        this.jugadorForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]().group({
            nombre: [this.jugador.nombre, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            apellidos: [this.jugador.apellidos, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            telefono: [this.jugador.telefono, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
    }
    JugadoresDetailsPage.prototype.editJugador = function () {
        var _this = this;
        Object.keys(this.jugadorForm.controls).forEach(function (k) {
            _this.jugador[k] = _this.jugadorForm.controls[k].value;
        });
    };
    JugadoresDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jugadores-details',template:/*ion-inline-start:"c:\Proyectos\Ionic\chessionic\src\pages\jugadores-details\jugadores-details.html"*/'<!--\n\n  Generated template for the JugadoresDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Edición</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n    <ion-list>\n\n        <ion-item>\n\n         ELO: {{ jugador.elo }}<br /> \n\n		 Puntos: {{ jugador.puntos }}<br /> \n\n         Partidas: {{ jugador.partidas }}<br />\n\n		 Partidas en casa: {{ jugador.pc }}<br /> \n\n		 Partidas fuera: {{ jugador.pf }}<br /> \n\n         Ganadas: {{ jugador.ganadas }}<br /> \n\n		 Empatadas: {{ jugador.empatadas }}<br />\n\n		 Perdidas: {{ jugador.perdidas }}<br /> \n\n        </ion-item>  \n\n      </ion-list>\n\n\n\n      <form [formGroup]="jugadorForm" (ngSubmit)="editJugador(jugadorForm.value)">\n\n          <ion-item>\n\n            <ion-label>Nombre</ion-label>\n\n            <ion-input type="text" formControlName="nombre" required></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n              <ion-label>Apellidos</ion-label>\n\n              <ion-input type="text" formControlName="apellidos" required></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n              <ion-label>Telefono</ion-label>\n\n              <ion-input type="number" formControlName="telefono" required></ion-input>\n\n          </ion-item>\n\n\n\n		  <div padding>\n\n		  	<button ion-button type="submit" color="yellow"><ion-icon name="build"></ion-icon>Guardar</button>\n\n          	<button ion-button color="primary" [navPush] = "jugadordetailsvolverboton">Volver</button>\n\n		  </div>\n\n          \n\n        </form>\n\n</ion-content>\n\n'/*ion-inline-end:"c:\Proyectos\Ionic\chessionic\src\pages\jugadores-details\jugadores-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_jugadores_jugadores__["a" /* JugadoresProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_jornadas_jornadas__["a" /* JornadasProvider */]])
    ], JugadoresDetailsPage);
    return JugadoresDetailsPage;
}());

//# sourceMappingURL=jugadores-details.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NuevaJornadaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_equipos_equipos__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_jornadas_jornadas__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_jornada_model__ = __webpack_require__(317);
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
    function NuevaJornadaPage(navCtrl, navParams, viewCtrl, _equiposProvider, _jornadasProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this._equiposProvider = _equiposProvider;
        this._jornadasProvider = _jornadasProvider;
        this.jornadaForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]().group({
            fecha: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[0-9]{4}-[0-9]{2}-[0-9]{2}')])],
            equipo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,])],
            local: [true,]
        });
        this.equipos = this._equiposProvider.cargar_equipos();
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
        var equipo = this._equiposProvider.getByName(data['equipo']);
        if (equipo) {
            var jornada = new __WEBPACK_IMPORTED_MODULE_5__models_jornada_model__["a" /* default */](new Date(data['fecha']), data['local'], equipo);
            this._jornadasProvider.addJornada(jornada);
        }
        this.exit();
    };
    NuevaJornadaPage.prototype.exit = function () {
        this.viewCtrl.dismiss();
    };
    NuevaJornadaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nueva-jornada',template:/*ion-inline-start:"c:\Proyectos\Ionic\chessionic\src\pages\nueva-jornada\nueva-jornada.html"*/'<!--\n\n  Generated template for the NuevaJornadaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Nueva jornada</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only color="royal" (click)="exit()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <form [formGroup]="jornadaForm" (ngSubmit)="submitJornada(jornadaForm.value)">\n\n    <ion-item [ngClass]="{\'error-border\':!jornadaForm.controls.fecha.valid && jornadaForm.controls.fecha.touched}">\n\n      <ion-label fixed>Fecha*</ion-label>\n\n      <ion-datetime displayFormat="DD/MM/YYYY" max="2030" formControlName="fecha" required></ion-datetime>\n\n	</ion-item>\n\n	<p *ngIf="jornadaForm.controls.fecha.hasError(\'required\') && jornadaForm.controls.fecha.touched" class="error">Debes introducir una fecha</p>\n\n	\n\n	<ion-item>\n\n		<ion-label>¿En casa?*</ion-label>\n\n		<ion-checkbox formControlName="local" required></ion-checkbox>\n\n	</ion-item>\n\n\n\n	<ion-item>\n\n		<ion-label>Equipo*</ion-label>\n\n		<ion-select formControlName="equipo" required>\n\n			<ion-option *ngFor="let equipo of this.equipos" value="{{ equipo.nombre }}">{{ equipo.nombre }}</ion-option>\n\n		</ion-select>\n\n	</ion-item>\n\n	\n\n	<div padding>\n\n      <button type="submit" [disabled]="!jornadaForm.valid" ion-button block>Guardar</button>\n\n    </div>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"c:\Proyectos\Ionic\chessionic\src\pages\nueva-jornada\nueva-jornada.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers_equipos_equipos__["a" /* EquiposProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_jornadas_jornadas__["a" /* JornadasProvider */]])
    ], NuevaJornadaPage);
    return NuevaJornadaPage;
}());

//# sourceMappingURL=nueva-jornada.js.map

/***/ }),

/***/ 170:
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
webpackEmptyAsyncContext.id = 170;

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/equipos-add/equipos-add.module": [
		710,
		10
	],
	"../pages/equipos/equipos.module": [
		711,
		9
	],
	"../pages/jornadas-detail/jornadas-detail.module": [
		712,
		8
	],
	"../pages/jornadas/jornadas.module": [
		713,
		7
	],
	"../pages/jugadores-add/jugadores-add.module": [
		715,
		6
	],
	"../pages/jugadores-details/jugadores-details.module": [
		714,
		5
	],
	"../pages/jugadores-list/jugadores-list.module": [
		716,
		4
	],
	"../pages/jugadores/jugadores.module": [
		717,
		3
	],
	"../pages/login/login.module": [
		718,
		2
	],
	"../pages/nueva-jornada/nueva-jornada.module": [
		719,
		1
	],
	"../pages/partidas-add/partidas-add.module": [
		720,
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
webpackAsyncContext.id = 215;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Partida = /** @class */ (function () {
    function Partida(jugador, resultado) {
        if (resultado === void 0) { resultado = "por jugar"; }
        var _this = this;
        this.jugador = jugador;
        this.resultado = resultado;
        this.puntuacion = function () {
            if (_this.resultado == 'ganada')
                return 1;
            else if (_this.resultado == 'empatada')
                return 0.5;
            return 0;
        };
        this.jugador = jugador;
        this.resultado = resultado;
    }
    return Partida;
}());
/* harmony default export */ __webpack_exports__["a"] = (Partida);
//# sourceMappingURL=partida.model.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_pages__ = __webpack_require__(76);
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
        this.tab1 = __WEBPACK_IMPORTED_MODULE_2__index_pages__["i" /* JugadoresPage */];
        this.tab2 = __WEBPACK_IMPORTED_MODULE_2__index_pages__["b" /* EquiposPage */];
        this.tab3 = __WEBPACK_IMPORTED_MODULE_2__index_pages__["e" /* JornadasPage */];
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

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Jugador; });
var Jugador = /** @class */ (function () {
    function Jugador(cod, nombre, apellidos, telefono, partidas, ganadas, empatadas, perdidas, elo, pc, pf, puntos) {
        if (partidas === void 0) { partidas = 0; }
        if (ganadas === void 0) { ganadas = 0; }
        if (empatadas === void 0) { empatadas = 0; }
        if (perdidas === void 0) { perdidas = 0; }
        if (elo === void 0) { elo = 0; }
        if (pc === void 0) { pc = 0; }
        if (pf === void 0) { pf = 0; }
        if (puntos === void 0) { puntos = 0; }
        var _this = this;
        this.cod = cod;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.telefono = telefono;
        this.partidas = partidas;
        this.ganadas = ganadas;
        this.empatadas = empatadas;
        this.perdidas = perdidas;
        this.elo = elo;
        this.pc = pc;
        this.pf = pf;
        this.puntos = puntos;
        this.getFullName = function () { return _this.nombre + " " + _this.apellidos; };
        this.cod = cod;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.telefono = telefono;
        this.partidas = partidas;
        this.ganadas = ganadas;
        this.empatadas = empatadas;
        this.perdidas = perdidas;
        this.elo = elo;
        this.pc = pc;
        this.pf = pf;
        this.puntos = puntos;
    }
    return Jugador;
}());

//# sourceMappingURL=jugador.model.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__partida_model__ = __webpack_require__(216);

var Jornada = /** @class */ (function () {
    function Jornada(fecha, local, equipo, partidas) {
        if (partidas === void 0) { partidas = null; }
        var _this = this;
        this.fecha = fecha;
        this.local = local;
        this.equipo = equipo;
        this.partidas = partidas;
        this.puntuacionTotal = function () { return _this.partidas.map(function (p) { return p.puntuacion(); }).reduce(function (a, b) { return a + b; }); };
        this.getPartidasWithResultCount = function (result) {
            if (result === void 0) { result = "por jugar"; }
            return _this.partidas.filter(function (p) { return p.resultado == result; }).length;
        };
        this.getPartidasGanadasCount = function () { return _this.getPartidasWithResultCount("ganada"); };
        this.getPartidasEmpatadasCount = function () { return _this.getPartidasWithResultCount("empatada"); };
        this.getPartidasPerdidasCount = function () { return _this.getPartidasWithResultCount("perdida"); };
        this.getFormattedDate = function () { return _this.fecha.getDate() + "/" + (_this.fecha.getMonth() + 1) + "/" + _this.fecha.getFullYear(); };
        this.participaJugador = function (jugadorId) { return _this.partidas.find(function (p) { return p.jugador.cod == jugadorId; }); };
        this.fecha = fecha;
        this.local = local;
        this.equipo = equipo;
        if (this.partidas != null) {
            this.partidas = partidas;
        }
        else {
            this.partidas = [];
            equipo.jugadores.forEach(function (jugador) {
                _this.partidas.push(new __WEBPACK_IMPORTED_MODULE_0__partida_model__["a" /* default */](jugador, 'por jugar'));
            });
        }
    }
    Jornada.prototype.addPartida = function (partida) {
        this.partidas.push(partida);
    };
    return Jornada;
}());
/* harmony default export */ __webpack_exports__["a"] = (Jornada);
//# sourceMappingURL=jornada.model.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EquiposPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_equipos_equipos__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__equipos_add_equipos_add__ = __webpack_require__(154);
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
            selector: 'page-equipos',template:/*ion-inline-start:"c:\Proyectos\Ionic\chessionic\src\pages\equipos\equipos.html"*/'<!--\n\n  Generated template for the EquiposPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Equipos</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <img src="assets/imgs/equipo.png" /><br />\n\n\n\n	<div padding>\n\n	    <button ion-button color="secondary" [navPush] = "hacerequipoboton"><ion-icon name="list"></ion-icon>GESTION EQUIPOS</button>\n\n	</div>\n\n\n\n	<ion-list>\n\n		<ion-card *ngFor="let equipo of _equiposProvider.cargar_equipos(); let i=index">\n\n			<ion-card-content ion-item>\n\n				Nombre: Equipo {{ equipo.nombre }}\n\n			</ion-card-content>\n\n		</ion-card>  \n\n	</ion-list>\n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"c:\Proyectos\Ionic\chessionic\src\pages\equipos\equipos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_equipos_equipos__["a" /* EquiposProvider */]])
    ], EquiposPage);
    return EquiposPage;
}());

//# sourceMappingURL=equipos.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JornadasDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__partidas_add_partidas_add__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_jornadas_jornadas__ = __webpack_require__(38);
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
 * Generated class for the JornadasDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var JornadasDetailPage = /** @class */ (function () {
    function JornadasDetailPage(navCtrl, navParams, _jornadasProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._jornadasProvider = _jornadasProvider;
        this.idx = this.navParams.get('idx');
        this.jornada = this._jornadasProvider.getJornadas()[this.idx];
        this.partidas = this.jornada.partidas;
    }
    JornadasDetailPage.prototype.deletePartida = function (i) {
        this.partidas.splice(i, 1);
    };
    JornadasDetailPage.prototype.addPartida = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__partidas_add_partidas_add__["a" /* PartidasAddPage */], {
            jornada: this.jornada,
            jornadaIdx: this.idx
        });
    };
    JornadasDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jornadas-detail',template:/*ion-inline-start:"c:\Proyectos\Ionic\chessionic\src\pages\jornadas-detail\jornadas-detail.html"*/'<!--\n\n  Generated template for the JornadasDetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Jornada {{ idx + 1 }}</ion-title>\n\n\n\n	<ion-buttons *ngIf="jornada.partidas.length < 7" end>\n\n      <button ion-button icon-only (click)="addPartida()">\n\n		Nueva partida\n\n		<ion-icon name="add"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n	<div padding>\n\n		<h1>Estadísticas</h1>\n\n\n\n		<p>Partidas ganadas: {{ jornada.getPartidasGanadasCount() }}</p>\n\n		<p>Partidas perdidas: {{ jornada.getPartidasPerdidasCount() }}</p>\n\n		<p>Partidas empatadas: {{ jornada.getPartidasEmpatadasCount() }}</p>\n\n\n\n		<p>Puntuación total: {{ jornada.puntuacionTotal() }}</p>\n\n\n\n		<h1>Partidas</h1>\n\n	</div>\n\n	\n\n	<ion-list>\n\n		<ion-card *ngFor="let partida of partidas; let i = index;">\n\n			<ion-card-header>\n\n				{{ partida.jugador.getFullName() }} contra desconocido\n\n			</ion-card-header>\n\n\n\n			<ion-card-content>\n\n				<ion-item>\n\n					<ion-label>Resultado</ion-label>\n\n					<ion-select [(ngModel)]="partida.resultado">\n\n						<ion-option value="por jugar">por jugar</ion-option>\n\n						<ion-option value="ganada">ganada</ion-option>\n\n						<ion-option value="empatada">empatada</ion-option>\n\n						<ion-option value="perdida">perdida</ion-option>\n\n					</ion-select>\n\n				</ion-item>\n\n\n\n				<div class="buttons">\n\n					<button color="danger" (click)="deletePartida(i)" ion-button small><ion-icon name="trash" outline></ion-icon>Eliminar</button>\n\n				</div>\n\n			</ion-card-content>\n\n		</ion-card>\n\n	</ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"c:\Proyectos\Ionic\chessionic\src\pages\jornadas-detail\jornadas-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_jornadas_jornadas__["a" /* JornadasProvider */]])
    ], JornadasDetailPage);
    return JornadasDetailPage;
}());

//# sourceMappingURL=jornadas-detail.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JornadasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_pages__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_jornadas_jornadas__ = __webpack_require__(38);
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
    function JornadasPage(navCtrl, navParams, modalCtrl, toastCtrl, _jornadasProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this._jornadasProvider = _jornadasProvider;
    }
    JornadasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JornadasPage');
    };
    JornadasPage.prototype.deleteJornada = function (jornadaIdx) {
        var _this = this;
        var toast = this.toastCtrl.create({
            message: "Do you really want to delete this work day?",
            duration: 5000,
            showCloseButton: true,
            closeButtonText: "Yes"
        });
        toast.onDidDismiss(function (data, role) {
            if (role == 'close') {
                _this._jornadasProvider.deleteJornada(jornadaIdx);
                // this.jornadas = this._jornadasProvider.getJornadas()
            }
        });
        toast.present();
    };
    JornadasPage.prototype.modalNewJornada = function () {
        var modalNewJornada = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__index_pages__["k" /* NuevaJornadaPage */]);
        modalNewJornada.onDidDismiss(function () {
            // this.jornadas = this._jornadasProvider.getJornadas()
        });
        modalNewJornada.present();
    };
    JornadasPage.prototype.goToJornadaDetails = function (idx) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__index_pages__["d" /* JornadasDetailPage */], {
            idx: idx
        });
    };
    JornadasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jornadas',template:/*ion-inline-start:"c:\Proyectos\Ionic\chessionic\src\pages\jornadas\jornadas.html"*/'<!--\n\n  Generated template for the JornadasPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n	<ion-title>Jornadas</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n	<div class="header-img-container">\n\n		<img class="header-img" src="assets/imgs/jornadas.png">\n\n	</div>\n\n	\n\n\n\n	<ion-list>\n\n		<ion-card tappable class="jornada-card" *ngFor="let jornada of _jornadasProvider.getJornadas(); let i = index" >\n\n			<ion-card-header (click)="goToJornadaDetails(i)">\n\n				Jornada {{ i + 1 }}\n\n			</ion-card-header>\n\n			\n\n			<ion-card-content>\n\n				Se juega el día {{ jornada.getFormattedDate() }} {{ jornada.local ? "en casa" : "fuera" }} <br />\n\n\n\n				<div class="buttons">\n\n					<button color="danger" (click)="deleteJornada(i)" ion-button small><ion-icon name="trash" outline></ion-icon>Eliminar</button>\n\n				</div>\n\n			</ion-card-content>\n\n		</ion-card>\n\n	</ion-list>\n\n\n\n	<ion-fab right bottom>\n\n		<button ion-fab color="secondary" (click)="modalNewJornada()"><ion-icon name="add"></ion-icon></button>\n\n	  </ion-fab>\n\n</ion-content>\n\n'/*ion-inline-end:"c:\Proyectos\Ionic\chessionic\src\pages\jornadas\jornadas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__providers_jornadas_jornadas__["a" /* JornadasProvider */]])
    ], JornadasPage);
    return JornadasPage;
}());

//# sourceMappingURL=jornadas.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(217);
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
            selector: 'page-login',template:/*ion-inline-start:"c:\Proyectos\Ionic\chessionic\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n	\n\n<ion-content padding>\n\n	<form (ngSubmit)="submitLogin()">\n\n		<ion-item>\n\n			<ion-label floating>Usuario</ion-label>\n\n			<ion-input type="text" [(ngModel)]="user.username" name="username"></ion-input>\n\n		</ion-item>\n\n		<ion-item>\n\n			<ion-label floating>Contraseña</ion-label>\n\n			<ion-input type="password" [(ngModel)]="user.password" name="password"></ion-input>\n\n		</ion-item>\n\n		<div padding>\n\n			<button type="submit" ion-button outline block>Entrar</button>\n\n		</div>\n\n	</form>\n\n</ion-content>\n\n'/*ion-inline-end:"c:\Proyectos\Ionic\chessionic\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(370);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_index_pages__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_nueva_jornada_nueva_jornada__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__firebaseConfig__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_auth_service__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_jugadores_jugadores__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_equipos_equipos__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_jornadas_jornadas__ = __webpack_require__(38);
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
                __WEBPACK_IMPORTED_MODULE_6__pages_index_pages__["j" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_pages__["e" /* JornadasPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_pages__["b" /* EquiposPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_pages__["a" /* EquiposAddPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_pages__["i" /* JugadoresPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_pages__["f" /* JugadoresAddPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_pages__["h" /* JugadoresListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_pages__["g" /* JugadoresDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_nueva_jornada_nueva_jornada__["a" /* NuevaJornadaPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_pages__["d" /* JornadasDetailPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_pages__["l" /* PartidasAddPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/equipos-add/equipos-add.module#EquiposAddPageModule', name: 'EquiposAddPage', segment: 'equipos-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/equipos/equipos.module#EquiposPageModule', name: 'EquiposPage', segment: 'equipos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jornadas-detail/jornadas-detail.module#JornadasDetailPageModule', name: 'JornadasDetailPage', segment: 'jornadas-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jornadas/jornadas.module#JornadasPageModule', name: 'JornadasPage', segment: 'jornadas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jugadores-details/jugadores-details.module#JugadoresDetailsPageModule', name: 'JugadoresDetailsPage', segment: 'jugadores-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jugadores-add/jugadores-add.module#JugadoresAddPageModule', name: 'JugadoresAddPage', segment: 'jugadores-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jugadores-list/jugadores-list.module#JugadoresListPageModule', name: 'JugadoresListPage', segment: 'jugadores-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jugadores/jugadores.module#JugadoresPageModule', name: 'JugadoresPage', segment: 'jugadores', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nueva-jornada/nueva-jornada.module#NuevaJornadaPageModule', name: 'NuevaJornadaPage', segment: 'nueva-jornada', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/partidas-add/partidas-add.module#PartidasAddPageModule', name: 'PartidasAddPage', segment: 'partidas-add', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_8_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_10__firebaseConfig__["a" /* default */])
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_pages__["c" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_pages__["j" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_pages__["e" /* JornadasPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_pages__["b" /* EquiposPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_pages__["a" /* EquiposAddPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_pages__["i" /* JugadoresPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_pages__["f" /* JugadoresAddPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_pages__["h" /* JugadoresListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_pages__["g" /* JugadoresDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_nueva_jornada_nueva_jornada__["a" /* NuevaJornadaPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_pages__["d" /* JornadasDetailPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_index_pages__["l" /* PartidasAddPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__["AngularFireAuth"],
                __WEBPACK_IMPORTED_MODULE_12__providers_jugadores_jugadores__["a" /* JugadoresProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_equipos_equipos__["a" /* EquiposProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_jornadas_jornadas__["a" /* JornadasProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JornadasProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the JornadasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var JornadasProvider = /** @class */ (function () {
    function JornadasProvider() {
        var _this = this;
        this.getJornadasByTeamName = function (teamName) { return _this.getJornadas().filter(function (j) { return j.equipo.nombre == teamName; }); };
        this.getJornadasByJugadorId = function (jugadorId) { return _this.getJornadas().filter(function (j) { return j.participaJugador(jugadorId); }); };
        this.deleteJugador = function (jugadorId) {
            _this.getJornadasByJugadorId(jugadorId).forEach(function (j) {
                j.partidas = j.partidas.filter(function (p) { return p.jugador.cod != jugadorId; });
            });
        };
        this._jornadas = [];
    }
    JornadasProvider.prototype.deleteJornada = function (jornadaIdx) {
        this._jornadas = this._jornadas.filter(function (_, i) { return i != jornadaIdx; });
    };
    JornadasProvider.prototype.addJornada = function (jornada) {
        this._jornadas.push(jornada);
    };
    JornadasProvider.prototype.getJornadas = function () {
        return this._jornadas.sort(function (j1, j2) {
            if (j1.fecha < j2.fecha) {
                return -1;
            }
            else if (j1.fecha > j2.fecha) {
                return 1;
            }
            return 0;
        });
    };
    JornadasProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], JornadasProvider);
    return JornadasProvider;
}());

//# sourceMappingURL=jornadas.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EquiposProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jornadas_jornadas__ = __webpack_require__(38);
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
    function EquiposProvider(_jornadasProvider) {
        var _this = this;
        this._jornadasProvider = _jornadasProvider;
        this._equipos = [];
        this.getByName = function (name) { return _this._equipos.find(function (e) { return e.nombre == name; }); };
        console.log('Hello EquiposProvider Provider');
    }
    EquiposProvider.prototype.deleteJugadorById = function (jugadorId) {
        this._equipos.forEach(function (equipo) {
            equipo.deleteJugadorById(jugadorId);
        });
        this._jornadasProvider.deleteJugador(jugadorId);
    };
    EquiposProvider.prototype.getEquiposByJugadorId = function (jugadorId) {
        return this._equipos.filter(function (e) { return e.getJugadorById(jugadorId); });
    };
    EquiposProvider.prototype.cargar_equipos = function () {
        return this._equipos;
    };
    EquiposProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__jornadas_jornadas__["a" /* JornadasProvider */]])
    ], EquiposProvider);
    return EquiposProvider;
}());

//# sourceMappingURL=equipos.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JugadoresProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__equipos_equipos__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jornadas_jornadas__ = __webpack_require__(38);
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
    function JugadoresProvider(_equiposProvider, _jornadasProvider) {
        var _this = this;
        this._equiposProvider = _equiposProvider;
        this._jornadasProvider = _jornadasProvider;
        this.cargar_jugadores = function () { return _this._jugadores; };
        this.getById = function (jugadorId) { return _this._jugadores.find(function (jugador) { return jugador.cod == jugadorId; }); };
        this.getEquipos = function (jugadorId) { return _this._equiposProvider.getEquiposByJugadorId(jugadorId); };
        this.getPartidas = function (jugadorId, result) {
            if (result === void 0) { result = null; }
            var partidas = [];
            _this._jornadasProvider.getJornadasByJugadorId(jugadorId).forEach(function (j) {
                j.partidas.forEach(function (p) {
                    if (p.jugador.cod == jugadorId) {
                        if (result == null)
                            partidas.push(p);
                        else if (p.resultado == result) {
                            partidas.push(p);
                        }
                    }
                });
            });
            return partidas;
        };
        this.getPartidasGanadas = function (jugadorId) { return _this.getPartidas(jugadorId, 'ganada'); };
        this.getPartidasPerdidas = function (jugadorId) { return _this.getPartidas(jugadorId, 'perdida'); };
        this.getPartidasEmpatadas = function (jugadorId) { return _this.getPartidas(jugadorId, 'empatada'); };
        this.partidas = function (jugadorId) { return _this.getPartidas(jugadorId).length; };
        this.ganadas = function (jugadorId) { return _this.getPartidasGanadas(jugadorId).length; };
        this.perdidas = function (jugadorId) { return _this.getPartidasPerdidas(jugadorId).length; };
        this.empatadas = function (jugadorId) { return _this.getPartidasEmpatadas(jugadorId).length; };
        console.log('Hello Jugadores Provider Provider');
        this._jugadores = [];
    }
    JugadoresProvider.prototype.deleteById = function (jugadorId) {
        this._jugadores = this._jugadores.filter(function (jugador) { return jugador.cod != jugadorId; });
        this._equiposProvider.deleteJugadorById(jugadorId);
    };
    JugadoresProvider.prototype.addJugador = function (Jugador) {
        this._jugadores.unshift(Jugador);
    };
    JugadoresProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__equipos_equipos__["a" /* EquiposProvider */], __WEBPACK_IMPORTED_MODULE_2__jornadas_jornadas__["a" /* JornadasProvider */]])
    ], JugadoresProvider);
    return JugadoresProvider;
}());

//# sourceMappingURL=jugadores.js.map

/***/ }),

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_index_pages__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_equipos_equipos__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_equipo_model__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_jugadores_jugadores__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_jornadas_jornadas__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_jornada_model__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__data_data_jugadores__ = __webpack_require__(707);
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
    function MyApp(platform, statusBar, splashScreen, auth, _equiposProvider, _jugadoresProvider, _jornadasProvider) {
        var _this = this;
        this.auth = auth;
        this._equiposProvider = _equiposProvider;
        this._jugadoresProvider = _jugadoresProvider;
        this._jornadasProvider = _jornadasProvider;
        // rootPage:any = LoginPage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_index_pages__["c" /* HomePage */];
        platform.ready().then(function () {
            __WEBPACK_IMPORTED_MODULE_11__data_data_jugadores__["a" /* JUGADORESINICIALES */].forEach(function (j) {
                _this._jugadoresProvider.addJugador(j);
            });
            var players = _this._jugadoresProvider.cargar_jugadores();
            var team = new __WEBPACK_IMPORTED_MODULE_7__models_equipo_model__["a" /* default */]('Titular', []);
            for (var i = 0; i < 4; i++) {
                team.addJugador(players[i]);
            }
            _this._equiposProvider._equipos = [team,];
            _this._jornadasProvider.addJornada(new __WEBPACK_IMPORTED_MODULE_10__models_jornada_model__["a" /* default */](new Date(), true, _this._equiposProvider.cargar_equipos()[0]));
            _this._jornadasProvider.addJornada(new __WEBPACK_IMPORTED_MODULE_10__models_jornada_model__["a" /* default */](new Date("2018/09/23"), false, _this._equiposProvider.cargar_equipos()[0]));
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"c:\Proyectos\Ionic\chessionic\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"c:\Proyectos\Ionic\chessionic\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_6__providers_equipos_equipos__["a" /* EquiposProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_jugadores_jugadores__["a" /* JugadoresProvider */], __WEBPACK_IMPORTED_MODULE_9__providers_jornadas_jornadas__["a" /* JornadasProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Equipo = /** @class */ (function () {
    function Equipo(nombre, jugadores) {
        var _this = this;
        this.nombre = nombre;
        this.jugadores = jugadores;
        this.getJugadorById = function (jugadorId) { return _this.jugadores.find(function (jugador) { return jugador.cod == jugadorId; }); };
        this.nombre = nombre;
        this.jugadores = jugadores;
    }
    Equipo.prototype.addJugador = function (jugador) {
        this.jugadores.push(jugador);
    };
    Equipo.prototype.deleteJugadorById = function (jugadorId) {
        this.jugadores = this.jugadores.filter(function (jugador) { return jugador.cod != jugadorId; });
    };
    Equipo.prototype.deleteJugador = function (jugador) {
        this.deleteJugadorById(jugador.cod);
    };
    return Equipo;
}());
/* harmony default export */ __webpack_exports__["a"] = (Equipo);
//# sourceMappingURL=equipo.model.js.map

/***/ }),

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JUGADORESINICIALES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_jugador_model__ = __webpack_require__(218);

var JUGADORESINICIALES = [
    new __WEBPACK_IMPORTED_MODULE_0__models_jugador_model__["a" /* Jugador */](0, 'Antonio', 'Ruiz Ortega', 661123456, 100),
    new __WEBPACK_IMPORTED_MODULE_0__models_jugador_model__["a" /* Jugador */](1, 'Manuel', 'Perez Matos', 678342178, 200),
    new __WEBPACK_IMPORTED_MODULE_0__models_jugador_model__["a" /* Jugador */](2, 'Pedro', 'Sanchez Castejon', 956456823, 225),
    new __WEBPACK_IMPORTED_MODULE_0__models_jugador_model__["a" /* Jugador */](3, 'Maria Dolores', 'Cospedal', 956882245, 250),
    new __WEBPACK_IMPORTED_MODULE_0__models_jugador_model__["a" /* Jugador */](4, 'Rita', 'Maestre', 678340982, 400)
];
//# sourceMappingURL=data.jugadores.js.map

/***/ }),

/***/ 709:
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

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(217);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__home_home__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jugadores_jugadores__ = __webpack_require__(156);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_1__jugadores_jugadores__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jugadores_add_jugadores_add__ = __webpack_require__(157);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__jugadores_add_jugadores_add__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jugadores_list_jugadores_list__ = __webpack_require__(89);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_3__jugadores_list_jugadores_list__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jugadores_details_jugadores_details__ = __webpack_require__(158);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_4__jugadores_details_jugadores_details__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__equipos_equipos__ = __webpack_require__(361);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__equipos_equipos__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__equipos_add_equipos_add__ = __webpack_require__(154);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_6__equipos_add_equipos_add__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__jornadas_jornadas__ = __webpack_require__(363);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_7__jornadas_jornadas__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login__ = __webpack_require__(364);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_8__login_login__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__nueva_jornada_nueva_jornada__ = __webpack_require__(159);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_9__nueva_jornada_nueva_jornada__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__jornadas_detail_jornadas_detail__ = __webpack_require__(362);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_10__jornadas_detail_jornadas_detail__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__partidas_add_partidas_add__ = __webpack_require__(155);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_11__partidas_add_partidas_add__["a"]; });












//# sourceMappingURL=index.pages.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JugadoresListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_jugadores_jugadores__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jugadores_details_jugadores_details__ = __webpack_require__(158);
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
    }
    JugadoresListPage.prototype.borrarJugador = function (id) {
        this._jugadoresProvider.deleteById(id);
    };
    JugadoresListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jugadores-list',template:/*ion-inline-start:"c:\Proyectos\Ionic\chessionic\src\pages\jugadores-list\jugadores-list.html"*/'<!--\n\n  Generated template for the JugadoresListPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Listar Jugadores</ion-title>\n\n  </ion-navbar>\n\n\n\n  \n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n    <ion-list>\n\n        <ion-card *ngFor="let jugador of _jugadoresProvider.cargar_jugadores()">\n\n			<ion-card-header>\n\n				{{ jugador.getFullName() }}\n\n			</ion-card-header>\n\n			<ion-card-content>\n\n				ELO: {{ jugador.elo }} <br /> Tfno: {{ jugador.telefono }}<br />\n\n         \n\n				<button ion-button color="danger" (click)="borrarJugador(jugador.cod)" small> \n\n					<ion-icon name="trash"></ion-icon>\n\n					Borrar\n\n				</button>\n\n\n\n				<button ion-button color="yellow" [navPush] = "jugadordetailsboton" [navParams]="{\'i\':jugador.cod}" small> \n\n					<ion-icon name="build"></ion-icon>  \n\n					Editar\n\n				</button>\n\n			</ion-card-content>   \n\n        </ion-card>  \n\n      </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"c:\Proyectos\Ionic\chessionic\src\pages\jugadores-list\jugadores-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_jugadores_jugadores__["a" /* JugadoresProvider */]])
    ], JugadoresListPage);
    return JugadoresListPage;
}());

//# sourceMappingURL=jugadores-list.js.map

/***/ })

},[365]);
//# sourceMappingURL=main.js.map