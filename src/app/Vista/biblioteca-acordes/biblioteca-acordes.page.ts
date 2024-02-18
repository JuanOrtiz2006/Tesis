import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-biblioteca-acordes',
  templateUrl: './biblioteca-acordes.page.html',
  styleUrls: ['./biblioteca-acordes.page.scss'],
})
export class BibliotecaAcordesPage implements OnInit {
  irPagina() {
    this.router.navigate(['../inicio']); 
  }
  constructor(private router:Router) { }

  ngOnInit() {
  }

}
