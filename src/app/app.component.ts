import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { onAuthStateChanged } from 'firebase/auth';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  usuarioConectado = false;
  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyDFylrfzKNrObhTmo5mMN4d2Rc4I_XiNDQ",
      authDomain: "registrousuario-4570a.firebaseapp.com"
    };

   
  }
  
}
