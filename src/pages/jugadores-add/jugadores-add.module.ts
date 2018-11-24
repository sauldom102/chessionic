import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JugadoresAddPage } from './jugadores-add';

@NgModule({
  declarations: [
    JugadoresAddPage,
  ],
  imports: [
    IonicPageModule.forChild(JugadoresAddPage),
  ],
})
export class JugadoresAddPageModule {}
