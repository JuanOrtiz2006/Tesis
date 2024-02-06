import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AutenticacionService } from 'src/app/Servicio/autenticacion.servie';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.page.html',
  styleUrls: ['./registro-usuario.page.scss'],
})
export class RegistroUsuarioPage implements OnInit {
 
  
  constructor(public AutenticacionService: AutenticacionService) { }

iniciarSesion(formulario: NgForm)
{

}

registrarUsuario(formulario:NgForm)
{
  this.AutenticacionService.registrarUsuario(
    formulario.value.correo,
    formulario.value.clave
  )
}
  ngOnInit() {
  }

}
