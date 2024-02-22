import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from '@angular/material/input';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Author, AuthorCreateRequest } from '../types/author';
import { MatButton } from "@angular/material/button";
import { MatProgressSpinner } from "@angular/material/progress-spinner";

@Component({
  selector: 'app-authors-form',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    ReactiveFormsModule,
    MatButton,
    MatLabel,
    MatProgressSpinner,
  ],
  templateUrl: './authors-form.component.html',
  styleUrl: './authors-form.component.scss',
})
export class AuthorsFormComponent {
  @Input() mode: 'CREATE' | 'EDIT' = 'CREATE';
  @Input() author: Author | null = null;
  @Input() pending: boolean | null = false;
  @Output() formSubmitted = new EventEmitter<AuthorCreateRequest>();

  readonly form = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
  });

  constructor() {
    if (this.mode === 'EDIT' && this.author) {
      this.form.patchValue(this.author);
    }
  }

  formSubmittedHandler() {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      return;
    }
    const { firstName, lastName } = this.form.value;
    if (firstName && lastName) {
      this.formSubmitted.emit({ firstName, lastName });
    }
  }
}
