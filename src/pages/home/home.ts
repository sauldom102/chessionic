import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { JugadoresPage, EquiposPage, JornadasPage } from '../index.pages';

@Component({
  selector: 'page-home',
  template: `
	<ion-tabs color="primary" selectedIndex="1">
		<ion-tab tabIcon="people" tabTitle="Jugadores" [root]="tab1"></ion-tab>
		<ion-tab tabIcon="contacts" tabTitle="Equipos" [root]="tab2"></ion-tab>
		<ion-tab tabIcon="calendar" tabTitle="Jornadas" [root]="tab3"></ion-tab>
	</ion-tabs>`
})
export class HomePage {

  tab1:any = JugadoresPage
  tab2:any = EquiposPage
  tab3:any = EquiposPage

  constructor(public navCtrl: NavController) {

  }

}
