import Jugadores from './jugador.model';


export default class Equipo{
    
    id:string
    jugadores:Jugadores

    constructor(id:string, jugadores:Jugadores){
        this.id=id
        this.jugadores=jugadores

    }
}


