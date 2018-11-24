import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { NuevaJornadaPage, JornadasDetailPage } from '../index.pages'
import { JornadasProvider } from '../../providers/jornadas/jornadas';
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

  jornadas:Jornada[]

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, 
	private _jornadasProvider: JornadasProvider) {
		this.jornadas = this._jornadasProvider.getJornadas()
  }

  ionViewDidLoad() {
	console.log('ionViewDidLoad JornadasPage');
  }

  modalNewJornada(){
	let modalNewJornada = this.modalCtrl.create(NuevaJornadaPage)
	modalNewJornada.present()
  }

  goToJornadaDetails(idx:number){
	this.navCtrl.push(JornadasDetailPage, {
		jornada: this.jornadas[idx],
		idx
	})
  }

}
