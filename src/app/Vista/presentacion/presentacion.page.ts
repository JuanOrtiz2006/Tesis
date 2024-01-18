import { Component, OnInit } from '@angular/core';
import { BluetoothSerial } from '@awesome-cordova-plugins/bluetooth-serial/ngx';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.page.html',
  styleUrls: ['./presentacion.page.scss'],
})
export class PresentacionPage implements OnInit {

  dispositivos: any;
  constructor(private BluetoothSerial:BluetoothSerial, private AllertControler: AlertController) { }

  ActivarBluetooth()
  {
    this.BluetoothSerial.isEnabled().then(response=> {
      this.Activado("Encendido");
      this.ListaDispositivos()
    },
    error=>{
      this.Activado("Apagado");
    }
    )
  }

  async Activado (msg: any)
  {
    const alerta = await this.AllertControler.create(
      {
        header: 'Alerta',
        message: msg,
        buttons: [
          {
            text: 'Okay',
            handler: ()=>{
              console.log('okay')
            }
          }]
      }
    )

  }

  ListaDispositivos()
  {
    this.BluetoothSerial.list().then(response=>{
      this.dispositivos=response
    }, 
    error=>{
      console.log("Error")
    }
    )
  }

  Conectar(address:any)
  {
    this.BluetoothSerial.connect(address).subscribe(succes=>{

    }, error=>{
      console.log("Error")
    }
    )
  }

  enviarDato()
  {
    this.BluetoothSerial.write("7").then(response=>{
      console.log("okay")
    }, error=>{
      console.log("Un problema")
    })
  }

  DispositivoConectado()
  {
    this.BluetoothSerial.subscribe('/n').subscribe(success=>{
      this.hundler(success)
    })
  }


  hundler(value:any){
    console.log(value)
  }
  ngOnInit() {
  }

}
