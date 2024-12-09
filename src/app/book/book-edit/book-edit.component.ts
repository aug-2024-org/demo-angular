import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Book } from '../book.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'book-edit',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './book-edit.component.html',
  styleUrl: './book-edit.component.css',
})
export class BookEditComponent {
  allBooks: Book[] = [
    {
      id: 1,
      bookTitle: 'The Great Gatsby',
      bookAuthorId: 1,
      bookCost: 10.99,
      bookImageUrl: 'https://example.com/gatsby.jpg',
    },
    {
      id: 2,
      bookTitle: 'To Kill a Mockingbird',
      bookAuthorId: 2,
      bookCost: 12.99,
      bookImageUrl: 'https://example.com/to-kill-a-mockingbird.jpg',
    },
    {
      id: 3,
      bookTitle: '1984',
      bookAuthorId: 3,
      bookCost: 9.99,
      bookImageUrl: 'https://example.com/1984.jpg',
    },
    {
      id: 4,
      bookTitle: 'Pride and Prejudice',
      bookAuthorId: 4,
      bookCost: 11.99,
      bookImageUrl: 'https://example.com/pride-and-prejudice.jpg',
    },
    {
      id: 5,
      bookTitle: 'The Catcher in the Rye',
      bookAuthorId: 5,
      bookCost: 10.49,
      bookImageUrl: 'https://example.com/catcher-in-the-rye.jpg',
    },
  ];

  fetchedBook: Book = {
    id: 0,
    bookTitle: '',
    bookAuthorId: null,
    bookCost: null,
    bookImageUrl: '',
  };

  myReactiveForm: FormGroup = new FormGroup({
    bookTitle: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    bookAuthorId: new FormControl(null, Validators.required),
    bookCost: new FormControl(null, Validators.required),
    bookImageUrl: new FormControl(''),
  });
  // try using FormBuilder to create the FormGroup object

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    let bId = this.activatedRoute.snapshot.params['bookId'];
    let data = this.allBooks.find((eachBook) => eachBook.id == bId);
    if(data){
      this.fetchedBook = data;
    }
    this.myReactiveForm.patchValue(this.fetchedBook);
  }

  updateBook() {
    console.log(this.myReactiveForm.value);
    console.log(this.myReactiveForm);
  }
}
