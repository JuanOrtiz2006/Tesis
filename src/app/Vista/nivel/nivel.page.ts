import { Component, OnInit } from '@angular/core';
import { Firestore,doc,setDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-nivel',
  templateUrl: './nivel.page.html',
  styleUrls: ['./nivel.page.scss'],
})
export class NivelPage implements OnInit {
  videos: string[] = [
    "../../../assets/Videos/AcordeDo.mp4",
    "../../../assets/Videos/AcordeRe.mp4",
    "../../../assets/Videos/AcordeMi.mp4",
    "../../../assets/Videos/AcordeFa.mp4",
    "../../../assets/Videos/AcordeSol.mp4",
    "../../../assets/Videos/AcordeLa.mp4",
    "../../../assets/Videos/AcordeSi.mp4"
  ];
  videoIndex: number = 0;
  ledstate:any;
  encendido:boolean=false;

  constructor(private db:Firestore) { }

  ngOnInit() {
  }

  cambiarVideoYEnviarNumero() {
    // Cambiar el video actual
    this.videoIndex = (this.videoIndex + 1) % this.videos.length;
    
    // Envía el número, en este caso el índice del video actual
    if (this.videoIndex === 0) {
      this.apagar('led1');
    }
    if (this.videoIndex === 1) {
      this.apagar('led2');
    }
    if (this.videoIndex === 2) {
      this.apagar('led3');
    }
    // Reproducir el nuevo video
    const videoElement = document.getElementById("videoFondo") as HTMLVideoElement;
    videoElement.src = this.videos[this.videoIndex];
    videoElement.play();
  }

  apagar(led: string) {
    this.encendido = !this.encendido;
    const ledState = doc(this.db, 'ControlTeclado', led); // RUTA DE TABLA EN LA BD
    setDoc(ledState, { encender: this.encendido}); // CAMBIA EL ATRIBUTO DE LA TABLA
  }
}
