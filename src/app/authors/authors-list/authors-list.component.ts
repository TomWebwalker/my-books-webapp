import { Component, inject } from '@angular/core';
import { MatList, MatListItem } from '@angular/material/list';
import { AsyncPipe } from '@angular/common';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatAnchor, MatIconAnchor, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectAuthorsList, selectAuthorsLoading } from '../+store';
import { authorsListAPIActions } from '../+store/actions';

@Component({
  selector: 'app-authors-list',
  standalone: true,
  imports: [
    MatList,
    MatListItem,
    AsyncPipe,
    MatProgressSpinner,
    MatIconButton,
    MatIcon,
    RouterLink,
    MatAnchor,
    MatIconAnchor
  ],
  templateUrl: './authors-list.component.html',
  styleUrl: './authors-list.component.scss'
})
export default class AuthorsListComponent {
  private readonly store = inject(Store);


  constructor() {
    this.store.dispatch(authorsListAPIActions.load());
  }

  readonly authors$ = this.store.select(selectAuthorsList);
  readonly loading$ = this.store.select(selectAuthorsLoading);

  deleteAuthorHandler(id: number): void {
    // TODO: Dispatch action to delete author
  }
}
