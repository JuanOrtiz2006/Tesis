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
  
  irAPagina2(ruta: string) {
    this.router.navigate([ruta]);  
  }
  
  tarjetas = [
    {
      titulo: "Continuar con el aprenizaje", 
      imagen: "", 
      click: () => this.irAPagina('../biblioteca-acordes')
    },
    {
      titulo: "Biblioteca acordes", 
      imagen: "", 
      click: () => this.irAPagina('../biblioteca-acordes')
    },
    {
      titulo: "Escalas", 
      imagen: "", 
      click: () => this.irAPagina2('../escalas')
    }
  ]
  
  constructor(private router: Router) {
    
   }
  ngOnInit() {
  }
}
