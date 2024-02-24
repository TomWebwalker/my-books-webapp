import { Routes } from '@angular/router';
import { provideState } from '@ngrx/store';
import { authorsFeature } from './+store';
import { provideEffects } from '@ngrx/effects';
import { AuthorsEffects } from './+store/effects';

const routes: Routes = [
  {
    path: '',
    providers: [provideState(authorsFeature), provideEffects(AuthorsEffects)],
    loadComponent: () => import('./authors-page/authors-page.component'),
    children: [
      {
        path: 'create',
        loadComponent: () =>
          import('./authors-create/authors-create.component')
      },
      {
        path: '',
        loadComponent: () => import('./authors-list/authors-list.component')
      }
    ]
  }
];

export default routes;
