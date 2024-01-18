import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  
  irAPagina(ruta: string) {
    this.router.navigate([]);
  }
  irAPagina2(ruta: string) {
    this.router.navigate([]);
  }

  tarjetas=[
    {titulo: "Facil",
     imagen: ""
    },
    {titulo: "Medio",
     imagen: ""
    },
    {titulo: "DIficil",
     imagen: ""
    }
    
  ]

  constructor(private router: Router) 
  {
  }

  


  ngOnInit() {
  }

}
