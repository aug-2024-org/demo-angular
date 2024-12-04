import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'todo-child-add',
  imports: [FormsModule],
  templateUrl: './todo-child-add.component.html',
  styleUrl: './todo-child-add.component.css'
})
export class TodoChildAddComponent {
  @Output() addTodo = new EventEmitter<string>()
  taskName: string = '';

  addTodoItem() {
    this.addTodo.emit(this.taskName);
    this.taskName = '';
  }
}
