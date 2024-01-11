import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-com-inicio',
  templateUrl: './com-inicio.component.html',
  styleUrls: ['./com-inicio.component.scss'],
})
export class ComInicioComponent  implements OnInit {

  @Input() titulo: string="";
  @Input() image: string="";
  constructor() { }

  ngOnInit() {}

}
