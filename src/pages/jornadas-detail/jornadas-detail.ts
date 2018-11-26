import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import Jornada from '../../models/jornada.model';
import Partida from '../../models/partida.model';
import { PartidasAddPage } from '../partidas-add/partidas-add';

/**
 * Generated class for the JornadasDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jornadas-detail',
  templateUrl: 'jornadas-detail.html',
})
export class JornadasDetailPage {

  idx:number
  jornada:Jornada
  resultados:string[]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
	  this.idx = this.navParams.get('idx')
	  this.jornada = this.navParams.get('jornada')
	  this.resultados = ['pj', 'pj', 'pj', 'pj']
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JornadasDetailPage');
  }

  ionViewDidLeave(){
	console.log('ionViewDidLeave JornadasDetailPage');
  }

  addPartida(){
	  this.navCtrl.push(PartidasAddPage, {
		  jornada: this.jornada,
		  jornadaIdx: this.idx
	  })
  }

}
