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

  tarjetas=[
    {titulo: "Facil",
     imagen: "",
     click: () => this.irAPagina('../biblioteca-acordes')
    },
    {titulo: "Medio",
     imagen: "",
     click: () => this.irAPagina('../nivel')
    },
    {titulo: "Dificil",
     imagen: "",
     click: () => this.irAPagina('../nivel')
    }
    
  ]

  constructor(private router: Router) 
  {
  }

  ngOnInit() {
  }

}
