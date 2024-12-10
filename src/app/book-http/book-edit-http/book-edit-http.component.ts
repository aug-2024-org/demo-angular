import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Book } from '../book.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BookHttpService } from '../book-http.service';

@Component({
  selector: 'book-edit-http',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './book-edit-http.component.html',
  styleUrl: './book-edit-http.component.css',
})
export class BookEditHttpComponent {
  fetchedBook: Book = {
    id: 0,
    bookTitle: '',
    bookAuthorId: null,
    bookCost: null,
    bookImageUrl: '',
  };

  myReactiveForm: FormGroup = new FormGroup({
    id: new FormControl(0),
    bookTitle: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    bookAuthorId: new FormControl(null, Validators.required),
    bookCost: new FormControl(null, Validators.required),
    bookImageUrl: new FormControl(''),
  });
  // try using FormBuilder to create the FormGroup object

  constructor(
    private activatedRoute: ActivatedRoute,
    private bookHttpService: BookHttpService,
    private router: Router
  ) {}

  ngOnInit() {
    let bId = this.activatedRoute.snapshot.params['bookId'];
    let data = this.bookHttpService.getABook(bId);
    if (data) {
      this.fetchedBook = data;
    }
    this.myReactiveForm.patchValue(this.fetchedBook);
  }

  updateBook() {
    console.log(this.myReactiveForm.value);
    console.log(this.myReactiveForm);
    this.bookHttpService.updateBook(this.myReactiveForm.value);
    // once updated we can navigate to BookListComponent
    // we need Router for programatically navigating
    // inject Router through the constructor
    this.router.navigate(['/book/book-list-http']);
  }
}
