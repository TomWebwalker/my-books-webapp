import { inject, Injectable } from '@angular/core';
import { API_URL } from '../const';
import { Observable } from 'rxjs';
import { Author, AuthorCreateRequest } from './types/author';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  private readonly http = inject(HttpClient);

  getList$(): Observable<Author[]> {
    return this.http.get<Author[]>(`${API_URL}/authors`);
  }

  create$(body: AuthorCreateRequest): Observable<string> {
    return this.http.post<string>(`${API_URL}/authors`, body);
  }

  delete$(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${API_URL}/authors/${id}`);
  }
}
