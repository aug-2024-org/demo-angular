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
  errorMessage: string = '';

  constructor(
    private bookHttpService: BookHttpService,
    private router: Router
  ) {}

  ngOnInit() {
    this.bookHttpService.getAllBooks().subscribe({
      next: (books) => {
        this.allBooks = books;
      },
      error: (err) => {
        console.log(err);
        this.errorMessage = 'An error occurred while fetching books';
      },
    });
  }

  editBook(bookId: number) {
    this.router.navigate(['/book-http/book-edit-http', bookId]);
  }

  deleteBook(bookId: number) {
    this.bookHttpService.deleteBook(bookId).subscribe({
      next: () => {
        this.allBooks = this.allBooks.filter((book) => book.id !== bookId);
      },
      error: (err) => {
        console.log(err);
        this.errorMessage = 'An error occurred while deleting the book';
      },
    });
  }
}
