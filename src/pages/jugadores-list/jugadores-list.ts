import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Servicios
import {JugadoresProvider} from "../../providers/jugadores/jugadores";
import { JugadoresDetailsPage } from '../jugadores-details/jugadores-details';


@IonicPage()
@Component({
  selector: 'page-jugadores-list',
  templateUrl: 'jugadores-list.html',
})
export class JugadoresListPage {

  jugadordetailsboton:any=JugadoresDetailsPage

  constructor(public navCtrl: NavController, public navParams: NavParams, private _jugadoresProvider:JugadoresProvider) {
   //PRUEBA INSERCION this._jugadoresProvider.agregar_jugadores(10,"AMOR", "AMOR",956234876,50,0,0,0,0,0,0,0); 
   // this._jugadoresProvider.agregar_jugadores(12,"AMORCITO", "AMORCITO",956234876,50,0,0,0,0,0,0,0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JugadoresListPage');
  }

  listarJugadores(){
    console.log(this._jugadoresProvider.cargar_jugadores())
   }

   borrarJugador( idx:number ){ 
    this._jugadoresProvider._jugadores.splice( idx, 1 );
   }

}
