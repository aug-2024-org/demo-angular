import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { CounterComponent } from './counter/counter.component';
import { ListFruitComponent } from './list-fruit/list-fruit.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { TodoParentComponent } from './todo/todo-parent/todo-parent.component';
import { BookAddComponent } from './book/book-add/book-add.component';
import { BookEditComponent } from './book/book-edit/book-edit.component';
import { ParentComponent } from './lifecycle-methods/parent/parent.component';
import { AppHeaderComponent } from './app-header/app-header.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    DisplayComponent,
    CounterComponent,
    ListFruitComponent,
    ListStudentComponent,
    TodoParentComponent,
    BookAddComponent,
    BookEditComponent,
    ParentComponent,
    AppHeaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'demo-angular';
}
