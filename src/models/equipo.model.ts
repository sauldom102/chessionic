import { Jugador } from './jugador.model';

import { JugadoresProvider } from '../providers/jugadores/jugadores'

export default class Equipo{
    
    id:string
    jugadores:Jugador[]

    constructor(id:string, jugadores:Jugador[]){
        this.id=id
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


