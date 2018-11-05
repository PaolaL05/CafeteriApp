import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage} from '../tabs/tabs';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  nombre:string;
  apellido:string;
  usuario:number;
  password:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signup(){
    if(this.password.length==0 || this.nombre.length==0 || this.apellido.length==0)
    alert("Por favor llena todo los campos.");

    console.log("Nombre: " + this.nombre);
    console.log("Apellido: " + this.apellido);
    console.log("Usuario: " + this.usuario);
    console.log("Contraseña: " + this.password);


  }
}
