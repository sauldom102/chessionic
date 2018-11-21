import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Servicios
import {JugadoresProvider} from "../../providers/jugadores/jugadores";
import { Jugador } from "../../models/jugador.model";

@IonicPage()
@Component({
  selector: 'page-jugadores-add',
  templateUrl: 'jugadores-add.html',
})
export class JugadoresAddPage {


  
  
  id: number;
  nombre: string;
  apellidos: string;
  telefono: number;
  elo: number;
  partidas: number;
  pc: number;
  pf: number;
  ganadas: number;
  empatadas: number;
  perdidas: number;
  puntos: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _jugadoresProvider:JugadoresProvider) {

    
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JugadoresAddPage');
  }


  addJugador() {
    
    let jugador:Jugador;
    jugador=new Jugador(99,"TEST", "TEST",1,2,3,4,5,6,7,8,9);
    jugador.id=this.id;
    jugador.nombre=this.nombre
    console.log("HOLA");
    this._jugadoresProvider.addJugador(jugador);
    console.log(this._jugadoresProvider._jugadores);
    
    
    }

}
