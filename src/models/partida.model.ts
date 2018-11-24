import { Jugador } from './jugador.model'

export default class Partida{

	constructor(public jugador:Jugador, public resultado:"ganada" |"empatada" | "perdida" | "por jugar" = "por jugar"){
		this.jugador = jugador
		this.resultado = resultado
	}
}