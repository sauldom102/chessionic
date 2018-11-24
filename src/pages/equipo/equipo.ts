import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//Servicios
import {EquipoProvider} from "../../providers/equipo/equipo";
import {EquiposAddPage} from "../equipos-add/equipos-add"

/**
 * Generated class for the EquiposPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-equipo',
  templateUrl: 'equipo.html',
})
export class EquipoPage {

  hacerequipoboton:any=EquiposAddPage //Variable para adjuntar en navpush del boton html

  constructor(public navCtrl: NavController, public navParams: NavParams, private _equipoProvider:EquipoProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EquiposPage');
  }



  

}
