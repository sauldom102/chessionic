
export class Jugador{
    
	constructor(public id:number, public nombre: string, public apellidos: string, public telefono: number, 
		public elo:number = 0, public partidas: number = 0, public pc: number = 0, public pf: number = 0, 
		public ganadas: number = 0, public empatadas: number = 0, public perdidas: number = 0,
		public puntos: number = 0){

		this.id=id
		this.nombre=nombre
		this.apellidos=apellidos
		this.telefono=telefono
		this.elo=elo
		this.partidas=partidas
		this.pc=pc
		this.pf=pf
		this.ganadas=ganadas
		this.empatadas=empatadas
		this.perdidas=perdidas
		this.puntos=puntos

	}

	getFullName = () => `${this.nombre} ${this.apellidos}`
}