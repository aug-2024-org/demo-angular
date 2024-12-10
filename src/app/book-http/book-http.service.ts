import { inject, Injectable } from '@angular/core';
import { Book } from './book.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class BookHttpService {
  baseUrl: string = 'http://localhost:3000/books';
  auth = inject(AuthService);
  options = {
    headers: {
      'Content-Type': 'application/json',
      Authorizatiion: `Bearer ${this.auth.retrieveToken()}`,
    },
  };

  constructor(private httpClient: HttpClient) {}

  getAllBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.baseUrl, this.options);
  }

  getABook(id: number): Observable<Book> {
    return this.httpClient.get<Book>(`${this.baseUrl}/${id}`, this.options);
  }

  updateBook(book: Book): Observable<Book> {
    return this.httpClient.put<Book>(`${this.baseUrl}/${book.id}`, book, this.options);
  }

  deleteBook(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`, this.options);
  }

  addBook(book: Book): Observable<Book> {
    return this.httpClient.post<Book>(this.baseUrl, book, this.options);
  }
}
