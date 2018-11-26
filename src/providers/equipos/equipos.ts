
import { Injectable } from '@angular/core';
import Equipo from "../../models/equipo.model";
import { JUGADORESINICIALES } from '../../data/data.jugadores';

@Injectable()
export class EquiposProvider {

  private _equipos:Equipo[] = []

  constructor() {
	console.log('Hello EquiposProvider Provider');
    this._equipos.push(new Equipo('Titular', JUGADORESINICIALES.slice(0, 4)))
  }

  deleteJugadorById(jugadorId: number){
	this._equipos.forEach(equipo => {
		equipo.deleteJugadorById(jugadorId)
	})
  }

  getEquiposByJugadorId(jugadorId: number){
	return this._equipos.filter(e => e.getJugadorById(jugadorId))
  }

  cargar_equipos(){
    return this._equipos
  }

  getByName = (name: string) => this._equipos.find(e => e.nombre == name)

}
