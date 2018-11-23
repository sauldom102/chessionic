import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Servicios
import {JugadoresProvider} from "../../providers/jugadores/jugadores";
import { Jugador } from "../../models/jugador.model";
import { JugadoresPage } from '../jugadores/jugadores';

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
   // PARA PROBAR GUARDADO jugador=new Jugador(99,"TEST", "TEST",1,2,3,4,5,6,7,8,9);
    jugador=new Jugador(null,null, null,null,null,null,null,null,null,null,null,null);
    jugador.id=this.id;
    jugador.nombre=this.nombre;
    jugador.apellidos=this.apellidos;
    jugador.telefono=this.telefono;
    jugador.elo=this.elo;
    jugador.partidas=this.partidas;
    jugador.pc=this.pc;
    jugador.pf=this.pf;
    jugador.ganadas=this.ganadas;
    jugador.empatadas=this.empatadas;
    jugador.perdidas=this.perdidas;
    jugador.puntos=this.puntos;

    
    console.log("POR AQUI ESTOY");
    console.log(this._jugadoresProvider._jugadores);
    //PARA EVITAR QUE SE GUARDE EL JUGADOR Y PASE A LA PANTALLA PRINCIPAL SI NO ESCRIBES NADA
    if(jugador.id!=null || jugador.nombre!=null || jugador.apellidos!=null || jugador.telefono!=null || jugador.elo!=null || jugador.partidas!=null
      || jugador.pc!=null || jugador.pf!=null || jugador.ganadas!=null || jugador.empatadas!=null || jugador.perdidas!=null || jugador.puntos!=null){
      this._jugadoresProvider.addJugador(jugador);
      this.navCtrl.push(JugadoresPage)
      }
    }

}
