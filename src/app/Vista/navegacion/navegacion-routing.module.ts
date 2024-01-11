import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavegacionPage } from './navegacion.page';

const routes: Routes = [
  {
    path: '',
    component: NavegacionPage,
    children: [
      {
        path: 'inicio',
        loadChildren: () => import('../inicio/inicio.module').then( m => m.InicioPageModule)
      },
      {
        path: 'biblioteca',
        loadChildren: () => import('../biblioteca/biblioteca.module').then( m => m.BibliotecaPageModule)
      },
      {
        path:"",
        redirectTo:"inicio",
        pathMatch:"full"
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavegacionPageRoutingModule {}
