import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'book-edit',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './book-edit.component.html',
  styleUrl: './book-edit.component.css'
})
export class BookEditComponent {
  myReactiveForm: FormGroup = new FormGroup({
    bookTitle: new FormControl('', [Validators.required, Validators.minLength(2)]),
    bookAuthorId: new FormControl(null, Validators.required),
    bookCost: new FormControl(null, Validators.required),
    bookImageUrl: new FormControl('')
  });
// try using FormBuilder to create the FormGroup object

constructor(httpClient: HttpClient){
  httpClient.get('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').subscribe((book: any) => {
    this.myReactiveForm.patchValue(book);
  })
}
  updateBook(){
    console.log(this.myReactiveForm.value);
    console.log(this.myReactiveForm);
  }
}
