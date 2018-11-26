
import { Injectable } from '@angular/core';
import Equipo from "../../models/equipo.model";
import { JornadasProvider } from '../jornadas/jornadas';

@Injectable()
export class EquiposProvider {

  public _equipos:Equipo[] = []

  constructor(private _jornadasProvider: JornadasProvider) {
	console.log('Hello EquiposProvider Provider');
  }

  deleteJugadorById(jugadorId: number){
	this._equipos.forEach(equipo => {
		equipo.deleteJugadorById(jugadorId)
	})
	this._jornadasProvider.deleteJugador(jugadorId)
  }

  getEquiposByJugadorId(jugadorId: number){
	return this._equipos.filter(e => e.getJugadorById(jugadorId))
  }

  cargar_equipos(){
    return this._equipos
  }

  getByName = (name: string) => this._equipos.find(e => e.nombre == name)

}
