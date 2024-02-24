import { inject, Injectable } from '@angular/core';
import { AuthorsService } from '../authors.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { authorsListAPIActions } from './actions';
import { catchError, map, switchMap } from 'rxjs';

@Injectable()
export class AuthorsEffects {
  private readonly authorsService = inject(AuthorsService);
  private readonly actions$ = inject(Actions);

  load$ = createEffect(() => this.actions$.pipe(
    ofType(authorsListAPIActions.load),
    switchMap(() => this.authorsService.getList$()),
    map(list => authorsListAPIActions.loadSuccess({ list })),
    catchError(() => [authorsListAPIActions.loadFailed()])
  ));

}

