import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../book.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-list',
  imports: [CommonModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
})
export class BookListComponent {
  allBooks: Book[] = [];

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit() {
    this.allBooks = this.bookService.getAllBooks();
  }

  editBook(bookId: number) {
    this.router.navigate(['/book/book-edit', bookId]);
  }

  deleteBook(bookId: number) {
    this.bookService.deleteBook(bookId);
    this.allBooks = this.bookService.getAllBooks();
  }
}
