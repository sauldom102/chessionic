import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

import { EquiposProvider } from "../../providers/equipos/equipos";
import Equipo from '../../models/equipo.model';
import { JornadasProvider } from '../../providers/jornadas/jornadas';
import Jornada from '../../models/jornada.model';

/**
 * Generated class for the NuevaJornadaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nueva-jornada',
  templateUrl: 'nueva-jornada.html',
})
export class NuevaJornadaPage {

  fecha:AbstractControl
  jornadaForm:FormGroup

  equipos:Equipo[]

  constructor(public navCtrl: NavController, public navParams: NavParams,
	public viewCtrl: ViewController, private _equiposProvider: EquiposProvider, private _jornadasProvider: JornadasProvider) {
		this.jornadaForm = new FormBuilder().group({
			fecha: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{4}-[0-9]{2}-[0-9]{2}')])],
			equipo: ['', Validators.compose([Validators.required, ])],
			local: [true, ]
		});

		this.equipos = this._equiposProvider.cargar_equipos()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevaJornadaPage');
  }

  submitJornada(){
	  let data = {}
	  Object.keys(this.jornadaForm.controls).forEach(k => {
		  data[k] = this.jornadaForm.controls[k].value
	  })
	  
	  let jornada = new Jornada(data['fecha'], data['local'], data['equipo'])
	  this._jornadasProvider.addJornada(jornada)

	  this.exit()
  }

  exit(){
	this.viewCtrl.dismiss()
  }

}
