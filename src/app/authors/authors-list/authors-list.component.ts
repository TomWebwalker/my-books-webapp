import { Component } from '@angular/core';
import { MatList, MatListItem } from '@angular/material/list';
import { AsyncPipe } from '@angular/common';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatAnchor, MatIconAnchor, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { of } from 'rxjs';

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

  constructor() {
    // TODO: Dispatch action to load authors
  }

  // readonly authors$ = this.store.select(selectAuthorsList);
  readonly authors$ = of([]);
  readonly loading$ = of(false);
  // TODO: Use the `authors$` observable to display the list of authors
  // TODO: Use the `loading$` observable to display a spinner while the list of authors is loading

  deleteAuthorHandler(id: number): void {
    // TODO: Dispatch action to delete author
  }
}
