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
 
  pairedList!: any[];
  listToggle: boolean = false;
  pairedDevice: number = 0;
  dataSend: string = "";
  dataRead: string = "";

  constructor(private bluetoothSerial: BluetoothSerial, private toastCtrl: ToastController) {
    this.checkBluetooth()
  }

  checkBluetooth(){
    this.bluetoothSerial.isEnabled().then(success=>{
      this.showError("Bluetooth activado");

    },error=>{
      this.showError("Por favor, activar bluetooth ")
    })
  }

  pairedListDevice(){
    this.bluetoothSerial.list().then(success=>{
      this.pairedList = success;
      this.listToggle = true;
    },error=>{
      this.showError("Por favor, activar bluetooth ");
      this.listToggle = false;
    })
  }

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

  connect(address: any) {
    // Attempt to connect device with specified address, call app.deviceConnected if success
    this.bluetoothSerial.connect(address).subscribe(success => {
      this.deviceConnected();
      this.showError("Successfully Connected");
    }, error => {
      this.showError("Error:Connecting to Device");
    });
  }

  deviceConnected() {
    // Subscribe to data receiving as soon as the delimiter is read
    this.bluetoothSerial.subscribe('\n').subscribe(success => {
      this.handleData(success);
      this.showError("Connected Successfullly");
    }, error => {
      this.showError(error);
    });
  }

  deviceDisconnected() {
    // Unsubscribe from data receiving
    this.bluetoothSerial.disconnect();
    this.showError("Device Disconnected");
  }

  handleData(data: any) {
    this.showError(data);
  }

  sendData() {
    this.dataSend+='\n';
    this.showError(this.dataSend);

    this.bluetoothSerial.write(this.dataSend).then(success => {
      this.showError(success);
    }, error => {
      this.showError(error)
    });
  }
  
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

