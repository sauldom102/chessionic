import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { JugadoresProvider } from "../../providers/jugadores/jugadores";
import { Jugador } from "../../models/jugador.model";
import { JugadoresListPage } from '../jugadores-list/jugadores-list';
import { EquiposProvider } from '../../providers/equipos/equipos';


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
	private _equiposProvider:EquiposProvider) {
	this.indexJugador = this.navParams.get("i")
	this.jugador = this._jugadoresProvider.getById(this.indexJugador)

	this.jugadorForm = new FormBuilder().group({
		nombre: [this.jugador.nombre, Validators.compose([Validators.required])],
		apellidos: [this.jugador.apellidos, Validators.compose([Validators.required])],
		telefono: [this.jugador.telefono, Validators.compose([Validators.required])]
	})

	console.log(this.jugador.partidas())
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
