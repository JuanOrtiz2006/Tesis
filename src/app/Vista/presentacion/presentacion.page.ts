import { Component, OnInit } from '@angular/core';
//Importar Bluethoot Serial
import { BluetoothSerial } from '@awesome-cordova-plugins/bluetooth-serial/ngx';
//Importar las Alertas de Ionic
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.page.html',
  styleUrls: ['./presentacion.page.scss'],
})
export class PresentacionPage implements OnInit {
 
  //Variables para leer datos
  pairedList!: any[]; //Lista de dispositivos
  listToggle: boolean = false; //Detector de listado
  pairedDevice: number = 0;
  dataSend: string = "";//Dato enviado
  dataRead: string = "";//Dato leido

  //Importacion de bluetooth
  constructor(private bluetoothSerial: BluetoothSerial, private toastCtrl: ToastController) {
    this.checkBluetooth()
  }

  //Metodo para verificar la nonexion
  checkBluetooth(){
    this.bluetoothSerial.isEnabled().then(success=>{
      this.showError("Bluetooth activado"); // Si el bluetooth esta activado 

    },error=>{
      this.showError("Por favor, activar bluetooth ")// Si no
    })
  }
  
  //Metodo para listado de dispositivos
  pairedListDevice(){
    this.bluetoothSerial.list().then(success=>{
      this.pairedList = success;
      this.listToggle = false;
    },error=>{
      this.showError("Por favor, activar bluetooth ");
      this.listToggle = true;
    })
  }

  //Metodo para seleccionar dispositivo
  selectDevice() {
    let connectedDevice = this.pairedList[this.pairedDevice];
    if (!connectedDevice.address) {
      this.showError('Select Paired Device to connect');
      return;
    }
    let address = connectedDevice.address;
    let name = connectedDevice.name;

    this.connect(address);
  }
  //Metodo para la conexion
  connect(address: any) {
    // Attempt to connect device with specified address, call app.deviceConnected if success
    this.bluetoothSerial.connect(address).subscribe(success => {
      this.deviceConnected();
      this.showError("Successfully Connected");
    }, error => {
      this.showError("Error:Connecting to Device");
    });
  }
  //Metodo para suscribirse a la red bluetooth
  deviceConnected() {
    // Subscribe to data receiving as soon as the delimiter is read
    this.bluetoothSerial.subscribe('\n').subscribe(success => {
      this.handleData(success);
      this.showError("Connected Successfullly");
    }, error => {
      this.showError(error);
    });
  }
  //Metodo para desconectar el dispositivo
  deviceDisconnected() {
    // Unsubscribe from data receiving
    this.bluetoothSerial.disconnect();
    this.showError("Device Disconnected");
  }

  handleData(data: any) {
    this.showError(data);
  }
  //Metodo para envio de datos
  sendData() {
    this.dataSend+='\n';
    this.showError(this.dataSend);

    this.bluetoothSerial.write(this.dataSend).then(success => {
      this.showError(success);
    }, error => {
      this.showError(error)
    });
  }
  //Metodo para leer datos
  readData(){
    this.bluetoothSerial.read().then((data) =>{
      this.dataRead += data;
    })
  }
  async showError(message: any) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
  
  ngOnInit() {
  }
}

interface pairedList{
  "class": number;
  "id": string,
  "address": string,
  "name": string

}

