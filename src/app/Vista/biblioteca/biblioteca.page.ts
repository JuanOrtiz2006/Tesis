import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.page.html',
  styleUrls: ['./biblioteca.page.scss'],
})
export class BibliotecaPage implements OnInit {
  irAPagina(ruta: string) {
    this.router.navigate(['../biblioteca-acordes']);
  }
  irAPagina2(ruta: string) {
    this.router.navigate(['../escalas']);
  }
  constructor(private router: Router) {
    
   }
  ngOnInit() {
  }
}
