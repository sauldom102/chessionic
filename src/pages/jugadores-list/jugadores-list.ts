import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Servicios
import {JugadoresProvider} from "../../providers/jugadores/jugadores";
import { JugadoresDetailsPage } from '../jugadores-details/jugadores-details';
import { Jugador } from '../../models/jugador.model';

@IonicPage()
@Component({
  selector: 'page-jugadores-list',
  templateUrl: 'jugadores-list.html',
})
export class JugadoresListPage {

  jugadordetailsboton:any=JugadoresDetailsPage

  constructor(public navCtrl: NavController, public navParams: NavParams, private _jugadoresProvider:JugadoresProvider) {
  }

   borrarJugador( id:number ){ 
	this._jugadoresProvider.deleteById(id)
   }

}
