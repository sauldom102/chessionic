import Equipo from './equipo.model';

export default class Jornada{
	id:string
	fecha:Date
	equipo:Equipo

	constructor(id:string, fecha:Date, equipo:Equipo){
		this.id = id
		this.fecha = fecha
		this.equipo = equipo
	}
}