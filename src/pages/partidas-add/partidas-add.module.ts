import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PartidasAddPage } from './partidas-add';

@NgModule({
  declarations: [
    PartidasAddPage,
  ],
  imports: [
    IonicPageModule.forChild(PartidasAddPage),
  ],
})
export class PartidasAddPageModule {}
