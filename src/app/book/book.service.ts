import { Injectable } from '@angular/core';
import { Book } from './book.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  allBooks: Book[] = [
    {
      id: 1,
      bookTitle: 'The Great Gatsby',
      bookAuthorId: 1,
      bookCost: 10.99,
      bookImageUrl:
        'https://cdn.pixabay.com/photo/2014/09/05/18/32/old-books-436498_1280.jpg',
    },
    {
      id: 2,
      bookTitle: 'To Kill a Mockingbird',
      bookAuthorId: 2,
      bookCost: 12.99,
      bookImageUrl:
        'https://cdn.pixabay.com/photo/2022/11/08/06/05/read-7577787_1280.jpg',
    },
    {
      id: 3,
      bookTitle: '1984',
      bookAuthorId: 3,
      bookCost: 9.99,
      bookImageUrl:
        'https://cdn.pixabay.com/photo/2018/07/01/20/01/music-3510326_1280.jpg',
    },
    {
      id: 4,
      bookTitle: 'Pride and Prejudice',
      bookAuthorId: 4,
      bookCost: 11.99,
      bookImageUrl:
        'https://cdn.pixabay.com/photo/2015/12/04/09/13/leaves-1076307_1280.jpg',
    },
    {
      id: 5,
      bookTitle: 'The Catcher in the Rye',
      bookAuthorId: 5,
      bookCost: 10.49,
      bookImageUrl:
        'https://cdn.pixabay.com/photo/2021/10/14/13/50/book-6709160_1280.jpg',
    },
  ];
  constructor() {}

  getAllBooks(): Book[] {
    return this.allBooks;
  }

  getABook(id: number): Book | undefined {
    return this.allBooks.find((eachBook) => eachBook.id == id);
  }

  updateBook(book: Book): void {
    const index = this.allBooks.findIndex((eachBook) => eachBook.id == book.id);
    console.log(index);
    this.allBooks[index] = book;
  }

  deleteBook(id: number): void {
    this.allBooks = this.allBooks.filter((eachBook) => eachBook.id != id);
  }

  addBook(book: Book): void {
    book.id = this.allBooks[this.allBooks.length - 1].id + 1;
    this.allBooks.push(book);
  }
}
