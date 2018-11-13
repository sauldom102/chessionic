import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Servicios
import {JugadoresProvider} from "../../providers/jugadores/jugadores";


/**
 * Generated class for the JugadoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jugadores',
  templateUrl: 'jugadores.html',
})
export class JugadoresPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private _jugadores:JugadoresProvider) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JugadoresPage');


  }

  añadirJugador(){
   console.log('log añadir Jugador');
    }

}
