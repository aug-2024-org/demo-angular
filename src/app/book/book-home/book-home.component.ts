import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-book-home',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './book-home.component.html',
  styleUrl: './book-home.component.css'
})
export class BookHomeComponent {

}
