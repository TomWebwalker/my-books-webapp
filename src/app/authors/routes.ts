import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // TODO: provide store and effects
    loadComponent: () => import('./authors-page/authors-page.component'),
    children: [
      {
        path: 'create',
        loadComponent: () =>
          import('./authors-create/authors-create.component'),
      },
      {
        path: '',
        loadComponent: () => import('./authors-list/authors-list.component'),
      },
    ],
  },
];

export default routes;
