import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'counter',
  imports: [FormsModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  counter: number = 0;

  incrementCounter(): void{
    this.counter++;
  }

  decrementCounter(): void{
    this.counter--;
  }
}
