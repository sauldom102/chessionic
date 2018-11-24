
import { Injectable } from '@angular/core';
import { Jugador } from "../../models/jugador.model";

//Servicios
import {JugadoresProvider} from "../../providers/jugadores/jugadores";


@Injectable()
export class EquiposProvider {


public _equipo:Jugador[]= [new Jugador(0,"Antonio", "Ruiz Ortega",100,661123456,0,0,0,0,0,0,0),
new Jugador(1,"Manuel", "Perez Matos",200,678342178,0,0,0,0,0,0,0),
new Jugador(2,"Pedro", "Sanchez Castejon",50,956456823,0,0,0,0,0,0,0),
new Jugador(3,"Maria Dolores", "Cospedal",250,956882245,0,0,0,0,0,0,0),
new Jugador(4,"Rita", "Maestre",400,678340981,0,0,0,0,0,0,0)]





  constructor() {
    console.log('Hello EquiposProvider Provider');
    

    
  }

  cargar_equipo(){
    return this._equipo

  }

  

}
