export class Jugador{
    
	constructor(public cod:number, public nombre: string, public apellidos: string, public telefono: number, 
		public partidas: number = 0, public ganadas: number = 0, public empatadas: number = 0,
		public perdidas: number = 0, public elo:number = 0, public pc: number = 0, public pf: number = 0, 
		public puntos: number = 0){

		this.cod=cod
		this.nombre=nombre
		this.apellidos=apellidos
		this.telefono=telefono
		this.partidas = partidas
		this.ganadas = ganadas
		this.empatadas = empatadas
		this.perdidas = perdidas
		this.elo=elo
		this.pc=pc
		this.pf=pf
		this.puntos=puntos
	}

	getFullName = () => `${this.nombre} ${this.apellidos}`
}