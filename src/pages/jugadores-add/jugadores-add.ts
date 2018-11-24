import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//Servicios
import {JugadoresProvider} from "../../providers/jugadores/jugadores";
import { Jugador } from "../../models/jugador.model";
import { JugadoresPage } from '../jugadores/jugadores';

@IonicPage()
@Component({
  selector: 'page-jugadores-add',
  templateUrl: 'jugadores-add.html',
})
export class JugadoresAddPage { 
  
  addJugadorForm:FormGroup

  constructor(public navCtrl: NavController, public navParams: NavParams, private _jugadoresProvider:JugadoresProvider) {
	this.addJugadorForm = new FormBuilder().group({
		id: ['', Validators.compose([Validators.required])],
		nombre: ['', Validators.compose([Validators.required])],
		apellidos: ['', Validators.compose([Validators.required])],
		telefono: ['', Validators.compose([Validators.required])],
	})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JugadoresAddPage');
  }

  addJugador() {
	let jugador = new Jugador(
		this.addJugadorForm.controls['id'].value,
		this.addJugadorForm.controls['nombre'].value,
		this.addJugadorForm.controls['apellidos'].value,
		this.addJugadorForm.controls['telefono'].value
	)
	this._jugadoresProvider.addJugador(jugador)
	this.navCtrl.push(JugadoresPage)
  }

}
