import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,
	public viewCtrl: ViewController) {
		this.jornadaForm = new FormBuilder().group({
			fecha: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{4}-[0-9]{2}-[0-9]{2}')])],
			equipo: ['', Validators.compose([Validators.required, ])]
		});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevaJornadaPage');
  }

  submitJornada(){
	  let data = {}
	  Object.keys(this.jornadaForm.controls).forEach(k => {
		  data[k] = this.jornadaForm.controls[k].value
	  })
	  console.log(data)
	  this.exit(data)
  }

  exit(data=null){
	this.viewCtrl.dismiss(data)
  }

}
