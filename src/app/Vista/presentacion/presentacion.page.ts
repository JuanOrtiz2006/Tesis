import { Component, OnInit } from '@angular/core';
//Importar Bluethoot Serial
import { BluetoothSerial } from '@awesome-cordova-plugins/bluetooth-serial/ngx';
//Importar las Alertas de Ionic
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.page.html',
  styleUrls: ['./presentacion.page.scss'],
})
export class PresentacionPage implements OnInit {

  //Variable para registrar dispositivos
  dispositivos: any;
  //Inportar el Bluetooth serial y las alertas del ionic
  constructor(private BluetoothSerial:BluetoothSerial, private AllertControler: AlertController) { }

  //Metodo para activar el bluetooth
  ActivarBluetooth()
  {
    //Si el bluetooth esta activado
    this.BluetoothSerial.isEnabled().then(response=> {//Responde
      this.Activado("Encendido"); //Metodo "Activado" envia mensaje Encendido
      this.ListaDispositivos() //Guarda el dispositivo
    },
    error=>{//Si hay un error
      this.Activado("Apagado"); //Metodo ""Activado" envia mensaje Apagado
    }
    )
  }
  //Metodo para listar dispositivos conectados
  ListaDispositivos()
  {
    //Listado del bluethoot serial
    this.BluetoothSerial.list().then(response=>{//Responde
      this.dispositivos=response//Guardas dispositivo en la variable dispositivo
    }, 
    error=>{//Si hay un error
      console.log("Error")//Manda a consola un mensaje
    }
    )
  }
  //Metodo para mensaje de aviso
  async Activado (msg: any) 
  {
    //La variable alerta espera el cotrol de alerta
    const alerta = await this.AllertControler.create(//Se crea un mensaje de consola
      {
        header: 'Alerta', //Cabeza de mensaje
        message: msg,
        buttons: [//Boton de opciones
          {
            text: 'Okay',
            handler: ()=>{
              console.log('okay')
            }
          }]
      }
    )
  }
  //Metodo para conectar dispositivo
  Conectar(address:any)
  {
    //El bluetooth serial se conectara al dispositivo
    this.BluetoothSerial.connect(address).subscribe(succes=>{
      this.DispositivoConectado()//Conexion
    }, error=>{//SI hay un errror
      console.log("Error")//Manda mensaje a consola
    }
    )
  }
  //Metodo para cuando el dispositivo este conectado
  DispositivoConectado()
  {
    this.BluetoothSerial.subscribe('/n').subscribe(success=>{
      this.hundler(success)
    })
  }
  hundler(value:any){
    console.log(value)
  }
  //Metodo para enviar datos al ESP32
  enviarDato()
  {
    this.BluetoothSerial.write("7").then(response=>{
      console.log("okay")
    }, error=>{
      console.log("Un problema")
    })
  }

  ngOnInit() {
  }

}
