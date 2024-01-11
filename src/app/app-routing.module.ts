import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'presentacion',
    pathMatch: 'full'
  },
  {
    path: 'presentacion',
    loadChildren: () => import('./Vista/presentacion/presentacion.module').then( m => m.PresentacionPageModule)
  },
  {
    path: 'registro-usuario',
    loadChildren: () => import('./Vista/registro-usuario/registro-usuario.module').then( m => m.RegistroUsuarioPageModule)
  },
  {
    path: 'inicio-sesion',
    loadChildren: () => import('./Vista/inicio-sesion/inicio-sesion.module').then( m => m.InicioSesionPageModule)
  },
  {
    path: 'navegacion',
    loadChildren: () => import('./Vista/navegacion/navegacion.module').then( m => m.NavegacionPageModule)
  },
  {
    path: 'biblioteca-acordes',
    loadChildren: () => import('./Vista/biblioteca-acordes/biblioteca-acordes.module').then( m => m.BibliotecaAcordesPageModule)
  },
  {
    path: 'escalas',
    loadChildren: () => import('./Vista/escalas/escalas.module').then( m => m.EscalasPageModule)
  },
  {
    path: 'nivel',
    loadChildren: () => import('./Vista/nivel/nivel.module').then( m => m.NivelPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
