import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//Servicios
import {EquiposProvider} from "../../providers/equipos/equipos";
import {EquiposAddPage} from "../equipos-add/equipos-add"
import Equipo from '../../models/equipo.model';
import { JugadoresProvider } from '../../providers/jugadores/jugadores';

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

  hacerequipoboton:any=EquiposAddPage //Variable para adjuntar en navpush del boton html

  constructor(public navCtrl: NavController, public navParams: NavParams, private _equiposProvider:EquiposProvider) {
	  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EquiposPage');
  }
  
}
