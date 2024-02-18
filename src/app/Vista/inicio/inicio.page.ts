import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  
  constructor(private router: Router) {}

  irAPagina(ruta: string) {
    this.router.navigate([ruta]); 
  }

  irPagina() {
    this.router.navigate(['../biblioteca']); 
  }

  irPagina2() {
    this.router.navigate(['../biblioteca']); 
  }

  tarjetas=[
    {titulo: "Facil",
     imagen: "../../../assets/Videos/.mp4",
     click: () => this.irAPagina('../nivel')
    },
    {titulo: "Medio",
     imagen: "../../../assets/Videos/Intermedio.mp4",
     click: () => this.irAPagina('../nivel')
    },
    {titulo: "Dificil",
     imagen: "../../../assets/Videos/Experto.mp4",
     click: () => this.irAPagina('../nivel')
    }
  ];

  ngOnInit() {}

}