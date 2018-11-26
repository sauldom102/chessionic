import { EquiposProvider } from "../providers/equipos/equipos";

export class Jugador{
    
	constructor(public id:number, public nombre: string, public apellidos: string, public telefono: number, 
		public elo:number = 0, public pc: number = 0, public pf: number = 0, public puntos: number = 0){

		this.id=id
		this.nombre=nombre
		this.apellidos=apellidos
		this.telefono=telefono
		this.elo=elo
		// this.partidas=partidas
		this.pc=pc
		this.pf=pf
		// this.ganadas=ganadas
		// this.empatadas=empatadas
		// this.perdidas=perdidas
		this.puntos=puntos
	}

	getFullName = () => `${this.nombre} ${this.apellidos}`

	getEquipos = () => new EquiposProvider().getEquiposByJugadorId(this.id)

	getPartidas = (result: string = null) => {
		let partidas = []
		this.getEquipos().forEach(e => {
			e.getJornadasByJugadorId(this.id).forEach(j => {
				j.partidas.forEach(p => {
					if ( p.jugador.id == this.id ){
						if ( result == null )
							partidas.push(p)
						else if ( p.resultado == result )
							partidas.push(p)
					}
				})
			})
		})

		return partidas
	}

	getPartidasGanadas = () => this.getPartidas('ganada')
	getPartidasPerdidas = () => this.getPartidas('perdida')
	getPartidasEmpatadas = () => this.getPartidas('empatada')

	partidas = () => this.getPartidas().length
	ganadas = () => this.getPartidasGanadas().length
	perdidas = () => this.getPartidasPerdidas().length
	empatadas = () => this.getPartidasEmpatadas().length
}