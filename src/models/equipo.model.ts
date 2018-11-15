import { Jugador } from './jugador.model';


export default class Equipo{
    
    id:string
    jugadores:Jugador

    constructor(id:string, jugadores:Jugador){
        this.id=id
        this.jugadores=jugadores

    }
}


