import { Component } from '@angular/core';
import { Book } from '../book.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'book-add',
  imports: [FormsModule, CommonModule],
  templateUrl: './book-add.component.html',
  styleUrl: './book-add.component.css',
})
export class BookAddComponent {
  constructor(private bookService: BookService, private router: Router) {}

  formData: Book = {
    id: 0,
    bookTitle: '',
    bookAuthorId: null,
    bookCost: null,
    bookImageUrl: '',
  };

  display(t: any) {
    console.log(t);
  }

  handleFormSubmit(myForm: any) {
    console.log(myForm);
    console.log(this.formData);
    this.bookService.addBook(this.formData);
    this.router.navigate(['/book/book-list']);
  }
}
