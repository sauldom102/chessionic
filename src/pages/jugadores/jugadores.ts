import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Servicios

import { Jugador } from "../../models/jugador.model";
import { JugadoresAddPage } from '../jugadores-add/jugadores-add';
import { JugadoresListPage } from '../jugadores-list/jugadores-list';




/**
 * Generated class for the JugadoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jugadores',
  templateUrl: 'jugadores.html',
})
export class JugadoresPage {



  jugadoraddboton:any=JugadoresAddPage //Variable para adjuntar en navpush del boton html
  jugadorlistboton:any=JugadoresListPage
 

  constructor(public navCtrl: NavController, public navParams: NavParams, ) {
    
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JugadoresPage');


  }


    

    
    
   

}
