import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import Jornada from '../../models/jornada.model';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
	  this.idx = this.navParams.get('idx')
	  this.jornada = this.navParams.get('jornada')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JornadasDetailPage');
  }

}
