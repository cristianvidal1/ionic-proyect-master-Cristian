import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./paginas/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'autor',
    loadChildren: () => import('./paginas/autor/autor.module').then( m => m.AutorPageModule)
  },
  {
    path: 'lista-libros',
    loadChildren: () => import('./paginas/lista-libros/lista-libros.module').then( m => m.ListaLibrosPageModule)
  },
  {
    path: 'curriculum-autor',
    loadChildren: () => import('./paginas/curriculum-autor/curriculum-autor.module').then( m => m.CurriculumAutorPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
