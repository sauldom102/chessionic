import Equipo from './equipo.model';

export default class Jornada{

	constructor(public fecha:Date, public local:boolean, public equipo:Equipo){
		this.fecha = fecha
		this.local = local
		this.equipo = equipo
	}
}