import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioPageRoutingModule } from './inicio-routing.module';
import { BluetoothSerial } from '@awesome-cordova-plugins/bluetooth-serial/ngx';

import { InicioPage } from './inicio.page';
import { SharedComponentModule } from 'src/app/Componentes/shared-component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioPageRoutingModule,
    SharedComponentModule
  ],
  declarations: [InicioPage],
  providers:[
    BluetoothSerial
    
  ]
})
export class InicioPageModule {}
