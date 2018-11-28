import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { JugadoresProvider } from "../../providers/jugadores/jugadores";
import { Jugador } from "../../models/jugador.model";
import { JugadoresListPage } from '../jugadores-list/jugadores-list';
import { EquiposProvider } from '../../providers/equipos/equipos';
import { JornadasProvider } from '../../providers/jornadas/jornadas';


@IonicPage()
@Component({
  selector: 'page-jugadores-details',
  templateUrl: 'jugadores-details.html',
})
export class JugadoresDetailsPage {

  jugadordetailsvolverboton:any=JugadoresListPage
  jugadorForm:FormGroup

  indexJugador:number;
  jugador:Jugador;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _jugadoresProvider:JugadoresProvider,
	private _jornadasProvider: JornadasProvider) {
	this.indexJugador = this.navParams.get("i")
	this.jugador = this._jugadoresProvider.getById(this.indexJugador)
	this.jugador.partidas = _jugadoresProvider.partidas(this.jugador.cod)
	this.jugador.ganadas = _jugadoresProvider.ganadas(this.jugador.cod)
	this.jugador.empatadas = _jugadoresProvider.empatadas(this.jugador.cod)
	this.jugador.perdidas = _jugadoresProvider.perdidas(this.jugador.cod)
	this.jugador.puntos = this.jugador.ganadas + 0.5 * this.jugador.empatadas

	let wd = this._jornadasProvider.getJornadasByJugadorId(this.jugador.cod)
	this.jugador.pc = 0
	this.jugador.pf = 0

	wd.forEach(_wd => {
		_wd.partidas.forEach(p => {
			if ( p.jugador.cod == this.jugador.cod ){
				if ( _wd.local )
					this.jugador.pc++
				else
					this.jugador.pf++
			}
		})
	})

	this.jugadorForm = new FormBuilder().group({
		nombre: [this.jugador.nombre, Validators.compose([Validators.required])],
		apellidos: [this.jugador.apellidos, Validators.compose([Validators.required])],
		elo: [this.jugador.elo, Validators.compose([Validators.required])],
		telefono: [this.jugador.telefono, Validators.compose([Validators.required])]
	})
  }


  editJugador() {
	Object.keys(this.jugadorForm.controls).forEach(k => {
		this.jugador[k] = this.jugadorForm.controls[k].value
	})
  }

}
