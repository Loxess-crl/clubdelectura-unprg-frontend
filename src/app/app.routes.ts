import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./landing/layout/layout.component').then(
        (c) => c.LayoutComponent
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./landing/inicio/inicio.component').then(
            (c) => c.InicioComponent
          ),
      },
      {
        path: 'libros',
        loadComponent: () =>
          import('./landing/libros/libros.component').then(
            (c) => c.LibrosComponent
          ),
      },
      {
        path: 'libros/:slug',

        loadComponent: () =>
          import('./landing/libro-detalle/libro-detalle.component').then(
            (c) => c.LibroDetalleComponent
          ),
      },
    ],
  },
];
