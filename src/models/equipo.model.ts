import { Jugador } from './jugador.model';

import { JugadoresProvider } from '../providers/jugadores/jugadores'

export default class Equipo{
    
    constructor(public nombre:string, public jugadores:Jugador[]){
        this.nombre = nombre
        this.jugadores=jugadores
	}

	addJugador(jugador:Jugador){
		this.jugadores.push(jugador)
	}

	addJugadorById(jugadorId:number){
		this.addJugador(new JugadoresProvider().getById(jugadorId))
	}

	deleteJugadorById(jugadorId:number){
		this.jugadores = this.jugadores.filter(jugador => jugador.id != jugadorId)
	}

	deleteJugador(jugador:Jugador){
		this.deleteJugadorById(jugador.id)
	}
}


