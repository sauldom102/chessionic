import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JugadoresListPage } from './jugadores-list';

@NgModule({
  declarations: [
    JugadoresListPage,
  ],
  imports: [
    IonicPageModule.forChild(JugadoresListPage),
  ],
})
export class JugadoresListPageModule {}
