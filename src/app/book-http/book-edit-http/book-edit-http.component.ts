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
  errorMessage: string = '';
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
    this.bookHttpService.getABook(bId).subscribe({
      next: (book) => {
        this.myReactiveForm.patchValue(book);
      },
      error: (err) => {
        console.log(err);
        this.errorMessage = 'Error Loading data...';
      },
    });
  }

  updateBook() {
    console.log(this.myReactiveForm.value);
    console.log(this.myReactiveForm);
    this.bookHttpService.updateBook(this.myReactiveForm.value).subscribe({
      next: (book) => {
        this.router.navigate(['/book-http/book-list-http']);
      },
      error: (err) => {
        console.log(err);
        this.errorMessage = 'Error Updating data...';
      },
    });
  }
}
