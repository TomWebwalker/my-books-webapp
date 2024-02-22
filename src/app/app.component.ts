import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatAnchor, MatIconButton } from '@angular/material/button';
import { MatList, MatListItem, MatNavList } from '@angular/material/list';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbar,
    MatAnchor,
    RouterLink,
    MatSidenavContainer,
    MatSidenav,
    MatSidenavContent,
    MatList,
    MatNavList,
    MatListItem,
    MatIconButton,
    MatIcon,
    MatToolbarRow
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  opened = false;
  title = 'my-books-webapp';
}
