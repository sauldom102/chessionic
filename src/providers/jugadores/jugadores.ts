import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Jugador } from "../../models/jugador.model";
import { JUGADORESINICIALES} from "../../data/data.jugadores"
import { EquipoProvider } from '../equipo/equipo';


@Injectable()
export class JugadoresProvider {

  public _jugadores:Jugador[]=JUGADORESINICIALES;
  
  constructor(private _equipoProvider: EquipoProvider = new EquipoProvider()) {
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
	this._equipoProvider.deleteJugadorById(jugadorId)
  }

  addJugador(Jugador){
    this._jugadores.unshift(Jugador)
  }
}
