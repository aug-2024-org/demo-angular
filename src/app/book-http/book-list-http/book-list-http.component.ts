import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookHttpService } from '../book-http.service';
import { Book } from '../book.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'book-list-http',
  imports: [CommonModule],
  templateUrl: './book-list-http.component.html',
  styleUrl: './book-list-http.component.css',
})
export class BookListHttpComponent {
  allBooks: Book[] = [];

  constructor(private bookService: BookHttpService, private router: Router) {}

  ngOnInit() {
    this.allBooks = this.bookService.getAllBooks();
  }

  editBook(bookId: number) {
    this.router.navigate(['/book/book-edit-http', bookId]);
  }

  deleteBook(bookId: number) {
    this.bookService.deleteBook(bookId);
    this.allBooks = this.bookService.getAllBooks();
  }
}
