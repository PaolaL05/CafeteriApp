import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstadocuentaPage } from './estadocuenta';

@NgModule({
  declarations: [
    EstadocuentaPage,
  ],
  imports: [
    IonicPageModule.forChild(EstadocuentaPage),
  ],
})
export class EstadocuentaPageModule {}
