import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';

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
	private toastCtrl: ToastController, private _jornadasProvider: JornadasProvider = new JornadasProvider()) {
		this.jornadas = this._jornadasProvider.getJornadas()
  }

  ionViewDidLoad() {
	console.log('ionViewDidLoad JornadasPage');
  }

  deleteJornada(jornadaIdx){
	let toast = this.toastCtrl.create({
        message: "Do you really want to delete this work day?",
        duration: 5000,
        showCloseButton: true,
        closeButtonText: "Yes"
	})

	toast.onDidDismiss((data, role) => {
		if ( role == 'close' ){
			this._jornadasProvider.deleteJornada(jornadaIdx)
			this.jornadas = this._jornadasProvider.getJornadas()
		}	
	})
	
	toast.present()
  }

  modalNewJornada(){
	let modalNewJornada = this.modalCtrl.create(NuevaJornadaPage)

	modalNewJornada.onDidDismiss(() => {
		this.jornadas = this._jornadasProvider.getJornadas()
	})

	modalNewJornada.present()
  }

  goToJornadaDetails(idx:number){
	this.navCtrl.push(JornadasDetailPage, {
		jornada: this.jornadas[idx],
		idx
	})
  }

}
