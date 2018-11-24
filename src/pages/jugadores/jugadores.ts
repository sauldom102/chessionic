import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Servicios
import {JugadoresProvider} from "../../providers/jugadores/jugadores";

import { Jugador } from '../../models/jugador.model'




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



 

  constructor(public navCtrl: NavController, public navParams: NavParams, private _jugadoresProvider:JugadoresProvider) {
    this._jugadoresProvider.agregar_jugador(new Jugador(10,"AMOR", "AMOR",956234876,50,0,0,0,0,0,0,0))
    this._jugadoresProvider.agregar_jugador(new Jugador(12,"AMORCITO", "AMORCITO",956234876,50,0,0,0,0,0,0,0))

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JugadoresPage');


  }

  añadirJugador(){
   console.log('log añadir Jugador');
    }


   

    listarJugadores(){
     console.log(this._jugadoresProvider.cargar_jugadores())
    }

}
