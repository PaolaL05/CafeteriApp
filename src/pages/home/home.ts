import { Component, ViewChild } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Nav) nav: Nav;
  pages: Array<{title: string, component: string, openTab?: any}>;
  rootPage = 'InicioPage';
  constructor(public navCtrl: NavController) {
    this.pages = [
      {title: 'Inicio', component: 'InicioPage', openTab: 1 },
      {title: 'Reservas', component: 'ReservasPage' },
      {title: 'Estado de cuenta', component: 'EstadocuentaPage'}
    ];
  }

  openPage(page) {
    this.nav.setRoot(page.component, {openTab: page.openTab});
  }
}
