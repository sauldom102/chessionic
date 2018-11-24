import Equipo from './equipo.model';
import Partida from './partida.model'

export default class Jornada{

	constructor(public fecha:Date, public local:boolean, public equipo:Equipo, public partidas:Partida[] = null){
		this.fecha = fecha
		this.local = local
		this.equipo = equipo

		if ( this.partidas ){
			this.partidas = partidas
		}else{
			this.partidas = []

			this.equipo.jugadores.forEach(jugador => {
				this.partidas.push(new Partida(jugador, 'por jugar'))
			})
		}
	}

	getFormattedDate = () => `${this.fecha.getDate()}/${this.fecha.getMonth() + 1}/${this.fecha.getFullYear()}`
}