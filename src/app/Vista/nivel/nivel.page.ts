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
  encendido2:boolean=false;
  encendido3:boolean=false;
  encendido4:boolean=false;
  encendido5:boolean=false;
  encendido6:boolean=false;
  encendido7:boolean=false;

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
    const ledState = doc(this.db, 'ControlTeclado', 'led1'); // RUTA DE TABLA EN LA BD
    setDoc(ledState, { encender: true}); // CAMBIA EL ATRIBUTO DE LA TABLA
  
    }else{
      const ledState = doc(this.db, 'ControlTeclado', 'led1'); // RUTA DE TABLA EN LA BD
      setDoc(ledState, { encender: false}); // CAMBIA EL ATRIBUTO DE LA TABLA
    
    }
    if (this.videoIndex === 1) {
    const ledState = doc(this.db, 'ControlTeclado', 'led2'); // RUTA DE TABLA EN LA BD
    setDoc(ledState, { encender: true}); // CAMBIA EL ATRIBUTO DE LA TABLA
    }else{
      const ledState = doc(this.db, 'ControlTeclado', 'led2'); // RUTA DE TABLA EN LA BD
      setDoc(ledState, { encender: false}); // CAMBIA EL ATRIBUTO DE LA TABLA
    
    }
    if (this.videoIndex === 2) {
    const ledState = doc(this.db, 'ControlTeclado', 'led3'); // RUTA DE TABLA EN LA BD
    setDoc(ledState, { encender: true}); // CAMBIA EL ATRIBUTO DE LA TABLA
    } else{
      const ledState = doc(this.db, 'ControlTeclado', 'led3'); // RUTA DE TABLA EN LA BD
    setDoc(ledState, { encender: false}); // CAMBIA EL ATRIBUTO DE LA TABLA
  
    }
    if (this.videoIndex === 3) {
    const ledState = doc(this.db, 'ControlTeclado', 'led4'); // RUTA DE TABLA EN LA BD
    setDoc(ledState, { encender: true}); // CAMBIA EL ATRIBUTO DE LA TABLA
    } else{
      const ledState = doc(this.db, 'ControlTeclado', 'led4'); // RUTA DE TABLA EN LA BD
    setDoc(ledState, { encender: false}); // CAMBIA EL ATRIBUTO DE LA TABLA
    }
    if (this.videoIndex === 4) {
    const ledState = doc(this.db, 'ControlTeclado', 'led5'); // RUTA DE TABLA EN LA BD
    setDoc(ledState, { encender: true}); // CAMBIA EL ATRIBUTO DE LA TABLA
    } else{
      const ledState = doc(this.db, 'ControlTeclado', 'led5'); // RUTA DE TABLA EN LA BD
      setDoc(ledState, { encender: false}); // CAMBIA EL ATRIBUTO DE LA TABLA
    
    }
    if (this.videoIndex === 5) {
    const ledState = doc(this.db, 'ControlTeclado', 'led6'); // RUTA DE TABLA EN LA BD
    setDoc(ledState, { encender: true}); // CAMBIA EL ATRIBUTO DE LA TABLA
    } else{
      const ledState = doc(this.db, 'ControlTeclado', 'led6'); // RUTA DE TABLA EN LA BD
    setDoc(ledState, { encender: false}); // CAMBIA EL ATRIBUTO DE LA TABLA
    
    }
    if (this.videoIndex === 6) {
    const ledState = doc(this.db, 'ControlTeclado', 'led7'); // RUTA DE TABLA EN LA BD
    setDoc(ledState, { encender: true}); // CAMBIA EL ATRIBUTO DE LA TABLA
    } else{
      const ledState = doc(this.db, 'ControlTeclado', 'led7'); // RUTA DE TABLA EN LA BD
    setDoc(ledState, { encender: false}); // CAMBIA EL ATRIBUTO DE LA TABLA
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
    // Envía el número, en este caso el índice del video actual
    if (this.videoIndex === 0) {
      const ledState = doc(this.db, 'ControlTeclado', 'led1'); // RUTA DE TABLA EN LA BD
      setDoc(ledState, { encender: true}); // CAMBIA EL ATRIBUTO DE LA TABLA
    
      }else{
        const ledState = doc(this.db, 'ControlTeclado', 'led1'); // RUTA DE TABLA EN LA BD
        setDoc(ledState, { encender: false}); // CAMBIA EL ATRIBUTO DE LA TABLA
      
      }
      if (this.videoIndex === 1) {
      const ledState = doc(this.db, 'ControlTeclado', 'led2'); // RUTA DE TABLA EN LA BD
      setDoc(ledState, { encender: true}); // CAMBIA EL ATRIBUTO DE LA TABLA
      }else{
        const ledState = doc(this.db, 'ControlTeclado', 'led2'); // RUTA DE TABLA EN LA BD
        setDoc(ledState, { encender: false}); // CAMBIA EL ATRIBUTO DE LA TABLA
      
      }
      if (this.videoIndex === 2) {
      const ledState = doc(this.db, 'ControlTeclado', 'led3'); // RUTA DE TABLA EN LA BD
      setDoc(ledState, { encender: true}); // CAMBIA EL ATRIBUTO DE LA TABLA
      } else{
        const ledState = doc(this.db, 'ControlTeclado', 'led3'); // RUTA DE TABLA EN LA BD
      setDoc(ledState, { encender: false}); // CAMBIA EL ATRIBUTO DE LA TABLA
    
      }
      if (this.videoIndex === 3) {
      const ledState = doc(this.db, 'ControlTeclado', 'led4'); // RUTA DE TABLA EN LA BD
      setDoc(ledState, { encender: true}); // CAMBIA EL ATRIBUTO DE LA TABLA
      } else{
        const ledState = doc(this.db, 'ControlTeclado', 'led4'); // RUTA DE TABLA EN LA BD
      setDoc(ledState, { encender: false}); // CAMBIA EL ATRIBUTO DE LA TABLA
      }
      if (this.videoIndex === 4) {
      const ledState = doc(this.db, 'ControlTeclado', 'led5'); // RUTA DE TABLA EN LA BD
      setDoc(ledState, { encender: true}); // CAMBIA EL ATRIBUTO DE LA TABLA
      } else{
        const ledState = doc(this.db, 'ControlTeclado', 'led5'); // RUTA DE TABLA EN LA BD
        setDoc(ledState, { encender: false}); // CAMBIA EL ATRIBUTO DE LA TABLA
      
      }
      if (this.videoIndex === 5) {
      const ledState = doc(this.db, 'ControlTeclado', 'led6'); // RUTA DE TABLA EN LA BD
      setDoc(ledState, { encender: true}); // CAMBIA EL ATRIBUTO DE LA TABLA
      } else{
        const ledState = doc(this.db, 'ControlTeclado', 'led6'); // RUTA DE TABLA EN LA BD
      setDoc(ledState, { encender: false}); // CAMBIA EL ATRIBUTO DE LA TABLA
      
      }
      if (this.videoIndex === 6) {
      const ledState = doc(this.db, 'ControlTeclado', 'led7'); // RUTA DE TABLA EN LA BD
      setDoc(ledState, { encender: true}); // CAMBIA EL ATRIBUTO DE LA TABLA
      } else{
        const ledState = doc(this.db, 'ControlTeclado', 'led7'); // RUTA DE TABLA EN LA BD
      setDoc(ledState, { encender: false}); // CAMBIA EL ATRIBUTO DE LA TABLA
    }
    
  }
    

  apagar(led: string) {
    }
}
