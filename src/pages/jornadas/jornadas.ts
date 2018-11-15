import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { NuevaJornadaPage } from '../index.pages'
/**
 * Generated class for the JornadasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 export interface Jornada{
	fecha: Date
 }

@IonicPage()
@Component({
  selector: 'page-jornadas',
  templateUrl: 'jornadas.html',
})
export class JornadasPage {

  jornadas:Jornada[] = []

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
	console.log('ionViewDidLoad JornadasPage');
  }

  modalNewJornada(){
	let modalNewJornada = this.modalCtrl.create(NuevaJornadaPage)

	modalNewJornada.onDidDismiss(data => {
		if ( data )
			this.jornadas.push(data)
	})

	modalNewJornada.present()
  }

}
