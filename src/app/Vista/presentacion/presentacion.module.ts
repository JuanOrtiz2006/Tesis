import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PresentacionPageRoutingModule } from './presentacion-routing.module';
import { BluetoothSerial } from '@awesome-cordova-plugins/bluetooth-serial/ngx';
import { PresentacionPage } from './presentacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PresentacionPageRoutingModule
  ],
  declarations: [PresentacionPage],
  providers: [
    BluetoothSerial//Bluetooth
  ]
})
export class PresentacionPageModule {}
