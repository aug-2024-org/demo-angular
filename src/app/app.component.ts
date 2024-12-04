import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DisplayComponent } from "./display/display.component";
import { CounterComponent } from "./counter/counter.component";
import { ListFruitComponent } from "./list-fruit/list-fruit.component";
import { ListStudentComponent } from "./list-student/list-student.component";
import { TodoParentComponent } from "./todo/todo-parent/todo-parent.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DisplayComponent, CounterComponent, ListFruitComponent, ListStudentComponent, TodoParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-angular';
}
