import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'list-fruit',
  imports: [CommonModule],
  templateUrl: './list-fruit.component.html',
  styleUrl: './list-fruit.component.css'
})
export class ListFruitComponent {
  allFruits: string[] = ["Apple", "Banana", "Orange", "Grapes", "Mango"];
}
