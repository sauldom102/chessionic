import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { JugadoresPage, EquipoPage, JornadasPage } from '../index.pages';

@Component({
  selector: 'page-home',
  template: `
	<ion-tabs color="primary" selectedIndex="0">
		<ion-tab tabIcon="people" tabTitle="Jugadores" [root]="tab1"></ion-tab>
		<ion-tab tabIcon="contacts" tabTitle="Equipo" [root]="tab2"></ion-tab>
		<ion-tab tabIcon="calendar" tabTitle="Jornadas" [root]="tab3"></ion-tab>
	</ion-tabs>`
})
export class HomePage {

  tab1:any = JugadoresPage
  tab2:any = EquipoPage
  tab3:any = JornadasPage

  constructor(public navCtrl: NavController) {

  }

}
