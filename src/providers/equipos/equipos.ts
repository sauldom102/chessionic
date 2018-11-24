
import { Injectable } from '@angular/core';
import Equipo from "../../models/equipo.model";

//Servicios
import { JUGADORESINICIALES } from '../../data/data.jugadores'


@Injectable()
export class EquiposProvider {

  private _equipos:Equipo[]= []

  constructor() {
    console.log('Hello EquiposProvider Provider');
    this._equipos.push(new Equipo('Titular', JUGADORESINICIALES.slice(0, 4)))
  }

  deleteJugadorById(jugadorId: number){
	this._equipos.forEach(equipo => {
		equipo.deleteJugadorById(jugadorId)
	})
  }

  cargar_equipos(){
    return this._equipos
  }

}
