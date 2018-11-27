import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {EquiposProvider} from "../../providers/equipos/equipos";

/**
 * Generated class for the EquiposAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-equipos-add',
  templateUrl: 'equipos-add.html',
})
export class EquiposAddPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private _equiposProvider:EquiposProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EquiposAddPage');
  }

}
