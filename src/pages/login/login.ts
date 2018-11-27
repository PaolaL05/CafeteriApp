import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username:string;
  password:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    console.log("Username: " + this.username);

    console.log("Password: " + this.password);

    this.navCtrl.push(HomePage);
  }
  }
