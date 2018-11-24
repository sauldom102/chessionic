
import { Injectable } from '@angular/core';
import { Jugador } from "../../models/jugador.model";

//Servicios
import {JugadoresProvider} from "../jugadores/jugadores";


@Injectable()
export class EquipoProvider {

  _equipo:Jugador[]= []

  constructor(private _jugadoresProvider:JugadoresProvider) {
    console.log('Hello EquiposProvider Provider');
    this._equipo = this._jugadoresProvider.cargar_jugadores().slice(0, 4)
  }

  cargar_equipo(){
    return this._equipo
  }

}
