import { Component, inject } from '@angular/core';
import { AuthorsFormComponent } from '../authors-form';
import { AuthorCreateRequest } from '../types/author'
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-authors-create',
  standalone: true,
  imports: [AuthorsFormComponent, AsyncPipe],
  template: `
    <app-authors-form
      [pending]="false"
      (formSubmitted)="formSubmittedHandler($event)" />`,
})
export default class AuthorsCreateComponent {
  // TODO: pending

  formSubmittedHandler(author: AuthorCreateRequest): void {
    // TODO: dispatch an action to create a new author
  }
}
