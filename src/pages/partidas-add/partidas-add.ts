import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import Jornada from '../../models/jornada.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Partida from '../../models/partida.model';

import { ToastController } from 'ionic-angular';

/**
 * Generated class for the PartidasAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-partidas-add',
  templateUrl: 'partidas-add.html',
})
export class PartidasAddPage {

  jornada:Jornada
  jornadaIdx:number
  partidaForm:FormGroup

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
	  this.jornada = navParams.get('jornada')
	  this.jornadaIdx = navParams.get('jornadaIdx')

	  this.partidaForm = new FormBuilder().group({
		jugador: ['', Validators.compose([Validators.required, ])],
		resultado: ['por jugar', Validators.compose([Validators.required, ])],
	  })
  }

  submitPartida(){
	  if ( this.jornada.partidas.length < 7 ){
		if ( this.partidaForm.valid ){
			let jugadorId = this.partidaForm.controls['jugador'].value
			let resultado = this.partidaForm.controls['resultado'].value
	
			this.jornada.addPartida(new Partida(this.jornada.equipo.getJugadorById(jugadorId), resultado))
		  }  
	  }else{
		let toast = this.toastCtrl.create({
			message: 'No es posible agregar más partidas puesto que ya se ha alcanzado el máximo',
			duration: 3000,
			position: 'bottom'
		  })

		toast.present()
	  }

	  this.navCtrl.pop()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PartidasAddPage');
  }

}
