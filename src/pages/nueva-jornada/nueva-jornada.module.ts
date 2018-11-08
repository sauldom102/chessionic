import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuevaJornadaPage } from './nueva-jornada';

@NgModule({
  declarations: [
    NuevaJornadaPage,
  ],
  imports: [
    IonicPageModule.forChild(NuevaJornadaPage),
  ],
})
export class NuevaJornadaPageModule {}
