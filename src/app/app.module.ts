import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage, LoginPage, JornadasPage, EquiposPage, JugadoresPage } from '../pages/index.pages';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import firebaseConfig from '../firebaseConfig';
import { AuthService } from '../services/auth.service';

@NgModule({
  declarations: [
    MyApp,
	HomePage,
	LoginPage,
	JornadasPage,
	EquiposPage,
	JugadoresPage
  ],
  imports: [
    BrowserModule,
	IonicModule.forRoot(MyApp),
	AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
	HomePage,
	LoginPage,
	JornadasPage,
	EquiposPage,
	JugadoresPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
	{provide: ErrorHandler, useClass: IonicErrorHandler},
	AuthService,
	AngularFireAuth
  ]
})
export class AppModule {}
