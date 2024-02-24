import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-authors-page',
  standalone: true,
  imports: [RouterOutlet],
  template: `<h1 class="page-title">Authors</h1>
    <router-outlet />`,
  styleUrl: './authors-page.component.scss',
})
export default class AuthorsPageComponent {

}
