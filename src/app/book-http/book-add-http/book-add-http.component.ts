import { Component } from '@angular/core';
import { Book } from '../book.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BookHttpService } from '../book-http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'book-add-http',
  imports: [FormsModule, CommonModule],
  templateUrl: './book-add-http.component.html',
  styleUrl: './book-add-http.component.css',
})
export class BookAddHttpComponent {
  constructor(
    private bookHttpService: BookHttpService,
    private router: Router
  ) {}

  errorMessage: string = '';
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
    console.log('myForm:', myForm);
    console.log('myForm value:', myForm.value);
    console.log(this.formData);
    this.bookHttpService.addBook(this.formData).subscribe({
      next: (data) => {
        this.router.navigate(['/book-http/book-list-http']);
      },
      error: (err) => {
        this.errorMessage = 'Error Adding data...';
      },
    });
  }
}
