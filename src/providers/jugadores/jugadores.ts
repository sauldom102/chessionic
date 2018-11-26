import { Injectable } from '@angular/core';
import { Jugador } from "../../models/jugador.model";
import { EquiposProvider } from '../equipos/equipos';
import { JornadasProvider } from '../jornadas/jornadas';
import Partida from '../../models/partida.model';

@Injectable()
export class JugadoresProvider {

  private _jugadores:Jugador[]
  
  constructor(private _equiposProvider: EquiposProvider, private _jornadasProvider: JornadasProvider) {
	console.log('Hello Jugadores Provider Provider');

	this._jugadores = []
  }

  cargar_jugadores = () => this._jugadores

  getById = (jugadorId: number) => this._jugadores.find(jugador => jugador.cod == jugadorId)

  deleteById(jugadorId: number){
	this._jugadores = this._jugadores.filter(jugador => jugador.cod != jugadorId);
	this._equiposProvider.deleteJugadorById(jugadorId)
  }

  getEquipos = (jugadorId:number) => this._equiposProvider.getEquiposByJugadorId(jugadorId)

  getPartidas = (jugadorId:number, result: string = null): Partida[] => {
		let partidas = []
		this._jornadasProvider.getJornadasByJugadorId(jugadorId).forEach(j => {
			j.partidas.forEach(p => {
				
				if ( p.jugador.cod == jugadorId ){
					if ( result == null )
						partidas.push(p)
					else if ( p.resultado == result ){
						partidas.push(p)
					}
				}
			})
		})

		return partidas
	}

	getPartidasGanadas = (jugadorId:number) => this.getPartidas(jugadorId, 'ganada')
	getPartidasPerdidas = (jugadorId:number) => this.getPartidas(jugadorId, 'perdida')
	getPartidasEmpatadas = (jugadorId:number) => this.getPartidas(jugadorId, 'empatada')

	partidas = (jugadorId:number) => this.getPartidas(jugadorId).length
	ganadas = (jugadorId:number) => this.getPartidasGanadas(jugadorId).length
	perdidas = (jugadorId:number) => this.getPartidasPerdidas(jugadorId).length
	empatadas = (jugadorId:number) => this.getPartidasEmpatadas(jugadorId).length

  addJugador(Jugador){
    this._jugadores.unshift(Jugador)
  }
}
