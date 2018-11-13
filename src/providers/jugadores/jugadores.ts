import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Jugador } from "../../models/jugador.model";

/*
  Generated class for the JugadoresProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class JugadoresProvider {

  private _jugadores:Jugador[]=[];

  constructor() {
    console.log('Hello Jugadores Provider Provider');
  }

  agregar_jugadores(id:number,nombre: string, apellidos: string,telefono: number,partidas: number, 
    pc: number,pf: number,ganadas: number, empatadas: number, perdidas: number,puntos: number){
    
    
      let data = new Jugador(id,nombre,apellidos,telefono,partidas,pc,pf,ganadas,empatadas,perdidas,puntos)

      this._jugadores.unshift(data)
  }

  cargar_jugadores(){
    return this._jugadores

  }
}
