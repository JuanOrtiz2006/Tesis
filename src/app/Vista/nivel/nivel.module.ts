import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NivelPageRoutingModule } from './nivel-routing.module';

import { NivelPage } from './nivel.page';
import { BluetoothSerial } from '@awesome-cordova-plugins/bluetooth-serial';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NivelPageRoutingModule
  ],
  declarations: [NivelPage],
  providers:[BluetoothSerial]
})
export class NivelPageModule {}
