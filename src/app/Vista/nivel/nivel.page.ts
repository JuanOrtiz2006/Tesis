import { Component, OnInit } from '@angular/core';
import { Firestore,doc,setDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nivel',
  templateUrl: './nivel.page.html',
  styleUrls: ['./nivel.page.scss'],
})
export class NivelPage implements OnInit {
  videos: string[] = [
    "../../../assets/Videos/NotaDo.mp4",
    "../../../assets/Videos/NotaRe.mp4",
    "../../../assets/Videos/NotaMi.mp4",
    "../../../assets/Videos/NotaFa.mp4",
    "../../../assets/Videos/NotaSol.mp4",
    "../../../assets/Videos/NotaLa.mp4",
    "../../../assets/Videos/NotaSi.mp4"
  ];
  videoIndex: number = 0;
  ledstate:any;
  encendido:boolean=false;

  constructor(private db:Firestore, private router:Router) {
  
   }
   
  irPagina() {
    this.router.navigate(['../inicio']); 
  }
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
    if (this.videoIndex === 3) {
      this.apagar('led4');
    }
    if (this.videoIndex === 4) {
      this.apagar('led5');
    }
    if (this.videoIndex === 5) {
      this.apagar('led6');
    }
    if (this.videoIndex === 6) {
      this.apagar('led7');
    }
    if (this.videoIndex === 7) {
      this.apagar('led8');
    }
    // Reproducir el nuevo video
    const videoElement = document.getElementById("videoFondo") as HTMLVideoElement;
    videoElement.src = this.videos[this.videoIndex];
    videoElement.play();
  }

  regresar() {
    // Cambiar el video actual
    this.videoIndex = (this.videoIndex - 1) % this.videos.length;
    const videoElement = document.getElementById("videoFondo") as HTMLVideoElement;
    videoElement.src = this.videos[this.videoIndex];
    videoElement.play();
    if (this.videoIndex === 0) {
      this.apagar('led1');
    }
    if (this.videoIndex === 1) {
      this.apagar('led2');
    }
    if (this.videoIndex === 2) {
      this.apagar('led3');
    }
    if (this.videoIndex === 3) {
      this.apagar('led4');
    }
    if (this.videoIndex === 4) {
      this.apagar('led5');
    }
    if (this.videoIndex === 5) {
      this.apagar('led6');
    }
    if (this.videoIndex === 6) {
      this.apagar('led7');
    }
    if (this.videoIndex === 7) {
      this.apagar('led8');
    }
  }
    

  apagar(led: string) {
    this.encendido = !this.encendido;
    const ledState = doc(this.db, 'ControlTeclado', led); // RUTA DE TABLA EN LA BD
    setDoc(ledState, { encender: this.encendido}); // CAMBIA EL ATRIBUTO DE LA TABLA
  }
}
