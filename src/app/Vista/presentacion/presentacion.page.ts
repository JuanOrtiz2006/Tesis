import { Component, OnInit} from '@angular/core';
import { BluetoothSerial } from '@awesome-cordova-plugins/bluetooth-serial/ngx';
import { ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.page.html',
  styleUrls: ['./presentacion.page.scss'],
})
export class PresentacionPage implements OnInit {

  pairedList: any[] = []; 
  pairedDevice: any; 
  dataToSend: string = ""; 
  dataReceived: string = ""; 

  constructor(private bluetoothSerial: BluetoothSerial, private toastCtrl: ToastController, private navCtrl: NavController) {
    this.checkBluetooth();
  }

  

  ngOnInit() {
  }

  checkBluetooth() {
    this.bluetoothSerial.isEnabled().then(() => {
      this.showAlert("Bluetooth activado");
      this.pairedListDevice();
    }).catch(() => {
      this.showAlert("Por favor, activar Bluetooth");
    });
  }

  pairedListDevice() {
    this.bluetoothSerial.list().then(devices => {
      this.pairedList = devices;
    }).catch(() => {
      this.showAlert("Error al obtener la lista de dispositivos pareados");
    });
  }

  selectDevice(device: any) {
    this.pairedDevice = device;
    this.connectToDevice();
  }

  connectToDevice() {
    this.bluetoothSerial.connect(this.pairedDevice.address).subscribe(() => {
      this.showAlert("Conectado al dispositivo");
      this.sendDataToESP32();
      this.navCtrl.navigateForward('../registro-usuario')
    }, () => {
      this.showAlert("Error al conectar al dispositivo");
    });
  }

  sendDataToESP32() {
    this.bluetoothSerial.write("7\n").then(() => {
      this.showAlert("Datos enviados correctamente");
    }).catch(() => {
      this.showAlert("Error al enviar datos");
    });
  }

  async showAlert(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  startBluetoothConnection() {
    // Iniciar la búsqueda de dispositivos Bluetooth
    this.pairedListDevice();
  }
}
