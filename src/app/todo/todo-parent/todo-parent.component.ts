import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TodoChildComponent } from "../todo-child/todo-child.component";
import { Todo } from '../todo.model';
import { TodoChildAddComponent } from "../todo-child-add/todo-child-add.component";

@Component({
  selector: 'todo-parent',
  imports: [CommonModule, TodoChildComponent, TodoChildAddComponent],
  templateUrl: './todo-parent.component.html',
  styleUrl: './todo-parent.component.css'
})
export class TodoParentComponent {
allTodos: Todo[] = [{
  id: 1,
  title: 'Learn Angular',
  completed: false
},
{
  id: 2,
  title: 'Laundry',
  completed: true
}
];

deleteTodo(todo: Todo) {
  this.allTodos = this.allTodos.filter(t => t.id !== todo.id);
}

completedTodo(todo: Todo) {
  this.allTodos = this.allTodos.map(t => {
    if (t.id === todo.id) {
      return { ...t, completed: !t.completed };
    }
    return t;
  });
}

handleAddTodo(title: string) {
  const newTodo: Todo = {
    id: this.allTodos[this.allTodos.length - 1].id + 1,
    title: title,
    completed: false
  };
  this.allTodos = [...this.allTodos, newTodo];
  console.log(this.allTodos);
}
}
