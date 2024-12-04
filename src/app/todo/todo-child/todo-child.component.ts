import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todo.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'todo-child',
  imports: [CommonModule],
  templateUrl: './todo-child.component.html',
  styleUrl: './todo-child.component.css'
})
export class TodoChildComponent {
 @Input() todoItem: Todo = {
  id: 0,
  title: '',
  completed: false
 };

 @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
 @Output() completedTodo: EventEmitter<Todo> = new EventEmitter();

 handleRemove(todoItem: Todo){
  this.deleteTodo.emit(todoItem);
 }

 handleCompleted(todoItem: Todo){
  this.completedTodo.emit(todoItem);
 }
}
