import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Jornada from '../../models/jornada.model';
import { EquiposProvider } from '../equipos/equipos';

/*
  Generated class for the JornadasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class JornadasProvider {

  private _jornadas:Jornada[] = []

  constructor(private _equiposProvider: EquiposProvider) {
	console.log('Hello JornadasProvider Provider');
	this.addJornada(new Jornada(new Date(), true, this._equiposProvider.cargar_equipos()[0]))
  }
  
  addJornada(jornada:Jornada){
	this._jornadas.push(jornada)
  }

  getJornadas(){
	return this._jornadas
  }

}
