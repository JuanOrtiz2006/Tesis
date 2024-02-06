import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AutenticacionService } from 'src/app/Servicio/autenticacion.servie';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.page.html',
  styleUrls: ['./registro-usuario.page.scss'],
})
export class RegistroUsuarioPage implements OnInit {
 
  
  constructor(public AutenticacionService: AutenticacionService, private router:Router) { }

iniciarSesion(formulario: NgForm)
{
  this.AutenticacionService.iniciarSesion(
    formulario.value.correo,
    formulario.value.clave
  ).then(info=>{
    console.log("Usuario registrado"),
    this.router.navigate(['../navegacion']); // Ajusta la ruta según tu estructura
      
  }).catch(error=>
    {
      console.log("Error al iniciar sesion")
    }
  )

}

registrarUsuario(formulario: NgForm) {
  this.AutenticacionService.registrarUsuario(formulario.value.correo, formulario.value.clave)
    .then((info) => {
      console.log("Usuario registrado");
      // Redirige a la página de inicio o a la que desees después de registrar
    }).catch((error) => {
      console.log("Error al registrar usuario. Intente de nuevo");
      this.router.navigate(['../registro-usuario']); // Ajusta la ruta según tu estructura

    });
}



  ngOnInit() {
  }

}
