import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JornadasDetailPage } from './jornadas-detail';

@NgModule({
  declarations: [
    JornadasDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(JornadasDetailPage),
  ],
})
export class JornadasDetailPageModule {}
