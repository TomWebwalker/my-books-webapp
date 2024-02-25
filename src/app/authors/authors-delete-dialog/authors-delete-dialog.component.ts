import { Component, inject } from '@angular/core';
import { MatDialogActions, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-authors-delete-dialog',
  standalone: true,
  imports: [MatDialogContent, MatDialogActions, MatButton],
  templateUrl: './authors-delete-dialog.component.html',
  styleUrl: './authors-delete-dialog.component.scss'
})
export class AuthorsDeleteDialogComponent {
  private readonly dialogRef = inject(
    MatDialogRef<AuthorsDeleteDialogComponent>
  );

  closeDialogHandler(result: boolean): void {
    this.dialogRef.close(result);
  }
}
