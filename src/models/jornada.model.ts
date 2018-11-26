import Equipo from './equipo.model';
import Partida from './partida.model'

export default class Jornada{

	constructor(public fecha:Date, public local:boolean, public equipo:Equipo, public partidas:Partida[] = null){
		this.fecha = fecha
		this.local = local
		this.equipo = equipo

		if ( this.partidas != null ){
			this.partidas = partidas
		}else{
			this.partidas = []

			equipo.jugadores.forEach(jugador => {
				this.partidas.push(new Partida(jugador, 'por jugar'))
			})
		}
	}

	puntuacionTotal = () => this.partidas.map(p => p.puntuacion()).reduce((a, b) => a + b)

	addPartida(partida: Partida){
		this.partidas.push(partida)
	}

	getPartidasWithResultCount = (result:"ganada" |"empatada" | "perdida" | "por jugar" = "por jugar") => {
		return this.partidas.filter(p => p.resultado == result).length
	}

	getPartidasGanadasCount = () => this.getPartidasWithResultCount("ganada")

	getPartidasEmpatadasCount = () => this.getPartidasWithResultCount("empatada")

	getPartidasPerdidasCount = () => this.getPartidasWithResultCount("perdida")

	getFormattedDate = () => `${this.fecha.getDate()}/${this.fecha.getMonth() + 1}/${this.fecha.getFullYear()}`

	participaJugador = (jugadorId: number) => this.partidas.find(p => p.jugador.cod == jugadorId)
}