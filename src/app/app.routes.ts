import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./products/products/products.component').then(p => p.ProductsComponent)
  }
];
