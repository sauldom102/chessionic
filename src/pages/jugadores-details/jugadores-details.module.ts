import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JugadoresDetailsPage } from './jugadores-details';

@NgModule({
  declarations: [
    JugadoresDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(JugadoresDetailsPage),
  ],
})
export class JugadoresDetailsPageModule {}
