import { Injectable } from '@angular/core';
import { Book } from './book.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookHttpService {
  baseUrl: string = 'http://localhost:3000/books';
  constructor(private httpClient: HttpClient) {}

  getAllBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.baseUrl);
  }

  getABook(id: number): Observable<Book> {
    return this.httpClient.get<Book>(`${this.baseUrl}/${id}`);
  }

  updateBook(book: Book): Observable<Book> {
    return this.httpClient.put<Book>(`${this.baseUrl}/${book.id}`, book);
  }

  deleteBook(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }

  addBook(book: Book): Observable<Book> {
    return this.httpClient.post<Book>(this.baseUrl, book);
  }
}
