import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import Jornada from '../../models/jornada.model';
import Partida from '../../models/partida.model';
import { PartidasAddPage } from '../partidas-add/partidas-add';
import { JornadasProvider } from '../../providers/jornadas/jornadas';

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
  partidas:Partida[]

  constructor(public navCtrl: NavController, public navParams: NavParams, private _jornadasProvider: JornadasProvider) {
	  this.idx = this.navParams.get('idx')
	  this.jornada = this._jornadasProvider.getJornadas()[this.idx]
	  this.partidas = this.jornada.partidas
  }

  deletePartida(i){
	  this.partidas.splice(i, 1)
  }
  
  addPartida(){
	  this.navCtrl.push(PartidasAddPage, {
		  jornada: this.jornada,
		  jornadaIdx: this.idx
	  })
  }

}
