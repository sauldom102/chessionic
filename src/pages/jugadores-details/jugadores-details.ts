import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

import { JugadoresProvider } from "../../providers/jugadores/jugadores";
import { Jugador } from "../../models/jugador.model";
import { JugadoresListPage } from '../jugadores-list/jugadores-list';


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

  constructor(public navCtrl: NavController, public navParams: NavParams, private _jugadoresProvider:JugadoresProvider) {
	this.indexJugador = this.navParams.get("i")
	this.jugador = this._jugadoresProvider.getById(this.indexJugador)

	this.jugadorForm = new FormBuilder().group({
		nombre: [this.jugador.nombre, Validators.compose([Validators.required])],
		apellidos: [this.jugador.apellidos, Validators.compose([Validators.required])],
		telefono: [this.jugador.telefono, Validators.compose([Validators.required])],
		elo: [this.jugador.elo, Validators.compose([Validators.required])],
		partidas: [this.jugador.partidas, Validators.compose([Validators.required])],
		pc: [this.jugador.pc, Validators.compose([Validators.required])],
		pf: [this.jugador.pf, Validators.compose([Validators.required])],
		ganadas: [this.jugador.ganadas, Validators.compose([Validators.required])],
		empatadas: [this.jugador.empatadas, Validators.compose([Validators.required])],
		perdidas: [this.jugador.perdidas, Validators.compose([Validators.required])],
		puntos: [this.jugador.puntos, Validators.compose([Validators.required])]
	})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JugadoresDetailsPage');
  }


  editJugador() {
	Object.keys(this.jugadorForm.controls).forEach(k => {
		this.jugador[k] = this.jugadorForm.controls[k].value
	})
  }

}
