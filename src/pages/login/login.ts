import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private user: {
	  username: string,
	  password: string
  } = {username: '', password: ''}

  private loginError: string

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  submitLogin() {
	let credentials = {
		email: this.user.username,
		password: this.user.password
	};

	this.auth.signInWithEmail(credentials)
		.then(
			() => this.navCtrl.setRoot(HomePage),
			error => this.loginError = error.message
		);
  }

}
