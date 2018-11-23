import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EquiposAddPage } from './equipos-add';

@NgModule({
  declarations: [
    EquiposAddPage,
  ],
  imports: [
    IonicPageModule.forChild(EquiposAddPage),
  ],
})
export class EquiposAddPageModule {}
