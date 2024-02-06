import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor(private auth: Auth) { }

  registrarUsuario(email: string, contraseña: string) {
    return createUserWithEmailAndPassword(this.auth, email, contraseña);
  }

}