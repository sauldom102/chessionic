import { Jugador } from './jugador.model'

export default class Partida{

	constructor(public jugador:Jugador, public resultado:"ganada" |"empatada" | "perdida" | "por jugar" = "por jugar"){
		this.jugador = jugador
		this.resultado = resultado
	}

	puntuacion = () : number => {
		if ( this.resultado == 'ganada' )
			return 1
		else if ( this.resultado == 'empatada' )
			return 0.5
		
		return 0
	}
}