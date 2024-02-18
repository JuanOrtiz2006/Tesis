import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.page.html',
  styleUrls: ['./presentacion.page.scss'],
})


export class PresentacionPage implements OnInit {
  irPagina() {
    this.router.navigate(['../registro-usuario']); 
  }
  constructor(private router: Router) {
  }

  

  ngOnInit() {
  }

}
