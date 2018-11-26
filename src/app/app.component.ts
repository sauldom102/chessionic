import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage, LoginPage } from '../pages/index.pages';

import { AuthService } from '../services/auth.service';
import { EquiposProvider } from '../providers/equipos/equipos';
import Equipo from '../models/equipo.model';
import { JugadoresProvider } from '../providers/jugadores/jugadores';
import { JornadasProvider } from '../providers/jornadas/jornadas';
import Jornada from '../models/jornada.model';
import { JUGADORESINICIALES } from '../data/data.jugadores';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage:any = LoginPage;
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private auth: AuthService, private _equiposProvider: EquiposProvider,
	private _jugadoresProvider: JugadoresProvider, private _jornadasProvider: JornadasProvider) {
    platform.ready().then(() => {
	  JUGADORESINICIALES.forEach(j => {
		this._jugadoresProvider.addJugador(j)
	  })

	  let players = this._jugadoresProvider.cargar_jugadores()
	  let team = new Equipo('Titular', [])
	  for ( let i = 0; i < 4; i++ ){
		team.addJugador(players[i])
	  }
	  this._equiposProvider._equipos = [team, ]

	  this._jornadasProvider.addJornada(new Jornada(new Date(), true, this._equiposProvider.cargar_equipos()[0]))
	  this._jornadasProvider.addJornada(new Jornada(new Date("2018/09/23"), false, this._equiposProvider.cargar_equipos()[0]))
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

