import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.page.html',
  styleUrls: ['./biblioteca.page.scss'],
})
export class BibliotecaPage implements OnInit {
  irAPagina(ruta: string) {
    this.router.navigate([ruta]); 
  }
  
  
  tarjetas = [
    {
      titulo: "Continuar con el aprenizaje", 
      imagen: "../../../assets/Videos/Principiante.mp4", 
      click: () => this.irAPagina('../biblioteca-acordes')
    },
    {
      titulo: "Biblioteca acordes", 
      imagen: "../../../assets/Videos/Intermedio.mp4", 
      click: () => this.irAPagina('../biblioteca-acordes')
    },
    {
      titulo: "Escalas", 
      imagen: "../../../assets/Videos/Experto.mp4", 
      click: () => this.irAPagina('../escalas')
    }
  ]
  
  constructor(private router: Router) {
    
   }
  ngOnInit() {
  }
}
