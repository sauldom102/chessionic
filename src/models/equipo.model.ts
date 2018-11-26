import { Jugador } from './jugador.model';

export default class Equipo{
    
    constructor(public nombre:string, public jugadores:Jugador[]){
        this.nombre = nombre
        this.jugadores = jugadores
	}

	addJugador(jugador:Jugador){
		this.jugadores.push(jugador)
	}

	getJugadorById = (jugadorId:number) => this.jugadores.find(jugador => jugador.cod == jugadorId)

	deleteJugadorById(jugadorId:number){
		this.jugadores = this.jugadores.filter(jugador => jugador.cod != jugadorId)
	}

	deleteJugador(jugador:Jugador){
		this.deleteJugadorById(jugador.cod)
	}
}


