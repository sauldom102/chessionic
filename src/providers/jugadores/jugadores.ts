import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Jugador } from "../../models/jugador.model";
import { JUGADORESINICIALES} from "../../data/data.jugadores"


@Injectable()
export class JugadoresProvider {

  public _jugadores:Jugador[]=JUGADORESINICIALES;
  

  constructor() {
    console.log('Hello Jugadores Provider Provider');
  }

  cargar_jugadores(){
    return this._jugadores
  }

  getById(jugadorId){
    return this._jugadores.find(jugador => jugador.id == jugadorId)
  }

  addJugador(Jugador){
    this._jugadores.unshift(Jugador)
  }
}
