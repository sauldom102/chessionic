import { Injectable } from '@angular/core';
import { Jugador } from "../../models/jugador.model";
import { JUGADORESINICIALES} from "../../data/data.jugadores"
import { EquiposProvider } from '../equipos/equipos';


@Injectable()
export class JugadoresProvider {

  public _jugadores:Jugador[]=JUGADORESINICIALES;
  
  constructor(private _equiposProvider: EquiposProvider = new EquiposProvider()) {
	console.log('Hello Jugadores Provider Provider');
  }

  cargar_jugadores(){
    return this._jugadores
  }

  getById(jugadorId: number){
    return this._jugadores.find(jugador => jugador.id == jugadorId)
  }

  deleteById(jugadorId: number){
	this._jugadores = this._jugadores.filter(jugador => jugador.id != jugadorId);
	this._equiposProvider.deleteJugadorById(jugadorId)
  }

  addJugador(Jugador){
    this._jugadores.unshift(Jugador)
  }
}
