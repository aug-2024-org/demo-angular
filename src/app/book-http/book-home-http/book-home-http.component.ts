import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'book-home-http',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './book-home-http.component.html',
  styleUrl: './book-home-http.component.css',
})
export class BookHomeHttpComponent {}
