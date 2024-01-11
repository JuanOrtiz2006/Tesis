import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BluetoothSerial, BluetoothSerialOriginal } from '@awesome-cordova-plugins/bluetooth-serial';
import {AlertController} from '@ionic/angular'
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  irAPagina(ruta: string) {
    this.router.navigate([]);
  }
  irAPagina2(ruta: string) {
    this.router.navigate([]);
  }
  constructor(private router: Router,  private bluetoothSerial:BluetoothSerialOriginal, private alertController:AlertController) 
  {}

  ActivarBluehooth()
  {
    this.bluetoothSerial.isEnabled().then(response=>
      {
        this.presentAlert("Ensendido");
        this.Listdivices()
      }, error=>
      {
        this.presentAlert("Apagado")
      });
  }

  Listdivices()
  {
    this.bluetoothSerial.list().then(response=>
      {
        this.Listdivices=response
      }, error=>{
        console.log ("Error")
      })
  }
  async presentAlert(msg: string) {

    const alert = await this.alertController.create({
      header: 'Alerta',
      message: msg,
      buttons: [
        {
          text: 'Listo',
          handler: () => {
            console.log('Listo');
          }
        }
      ]
    });
  
    await alert.present();
  
  }

  ngOnInit() {
  }

}
