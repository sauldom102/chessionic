import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {JugadoresProvider} from "../../providers/jugadores/jugadores";

/**
 * Generated class for the JugadoresDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jugadores-details',
  templateUrl: 'jugadores-details.html',
})
export class JugadoresDetailsPage {

    indexjugadores:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private _jugadoresProvider:JugadoresProvider) {
    
    this.indexjugadores=this.navParams.get("i")

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JugadoresDetailsPage');
  }

}
