
import { Injectable } from '@angular/core';
import { Jugador } from "../../models/jugador.model";

//Servicios
import { JUGADORESINICIALES } from '../../data/data.jugadores'


@Injectable()
export class EquipoProvider {

  _equipo:Jugador[]= []

  constructor() {
    console.log('Hello EquiposProvider Provider');
    this._equipo = JUGADORESINICIALES.slice(0, 4)
  }

  deleteJugadorById(jugadorId: number){
	this._equipo = this._equipo.filter(jugador => jugador.id != jugadorId)
  }

  cargar_equipo(){
    return this._equipo
  }

}
