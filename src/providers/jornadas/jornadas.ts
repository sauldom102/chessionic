import { Injectable } from '@angular/core';
import Jornada from '../../models/jornada.model';
import { EquiposProvider } from '../equipos/equipos';

/*
  Generated class for the JornadasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class JornadasProvider {

  private _jornadas:Jornada[]
  
  constructor() {
	  this._jornadas = []
  }

  deleteJornada(jornadaIdx:number){
	this._jornadas = this._jornadas.filter((_, i) => i != jornadaIdx)
  }
  
  addJornada(jornada:Jornada){
	this._jornadas.push(jornada)
  }
  
  getJornadas(){
	return this._jornadas.sort((j1, j2) => {
		if ( j1.fecha < j2.fecha ){
			return -1
		}else if ( j1.fecha > j2.fecha ){
			return 1
		}

		return 0
	})
  }

  getJornadasByTeamName = (teamName: string) => this.getJornadas().filter(j => j.equipo.nombre == teamName)

  getJornadasByJugadorId = (jugadorId: number) => this.getJornadas().filter(j => j.participaJugador(jugadorId))

  deleteJugador = (jugadorId: number) => {
	this.getJornadasByJugadorId(jugadorId).forEach(j => {
		j.partidas = j.partidas.filter(p => p.jugador.cod != jugadorId)	
	})
  }
}
