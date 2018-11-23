import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//Servicios
import {EquiposProvider} from "../../providers/equipos/equipos";

/**
 * Generated class for the EquiposPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-equipos',
  templateUrl: 'equipos.html',
})
export class EquiposPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private _equiposProvider:EquiposProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EquiposPage');
  }



  

}
