import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'authors',
    loadChildren: () => import('./authors/routes'),
  },
];
