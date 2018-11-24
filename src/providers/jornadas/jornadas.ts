import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Jornada from '../../models/jornada.model';

/*
  Generated class for the JornadasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class JornadasProvider {

  private _jornadas:Jornada[] = []

  constructor() {
    console.log('Hello JornadasProvider Provider');
  }
  
  addJornada(jornada:Jornada){
	this._jornadas.push(jornada)
  }

  getJornadas(){
	return this._jornadas
  }

}
