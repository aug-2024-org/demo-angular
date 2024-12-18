import { Routes } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { CounterComponent } from './counter/counter.component';
import { ListFruitComponent } from './list-fruit/list-fruit.component';
import { TodoParentComponent } from './todo/todo-parent/todo-parent.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BookHomeComponent } from './book/book-home/book-home.component';
import { BookAddComponent } from './book/book-add/book-add.component';
import { BookEditComponent } from './book/book-edit/book-edit.component';
import { BookHomeHttpComponent } from './book-http/book-home-http/book-home-http.component';
import { BookListHttpComponent } from './book-http/book-list-http/book-list-http.component';
import { BookAddHttpComponent } from './book-http/book-add-http/book-add-http.component';
import { BookEditHttpComponent } from './book-http/book-edit-http/book-edit-http.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    title: 'Login',
    component: LoginComponent,
  },
  {
    path: 'logout',
    title: 'Logout',
    component: LogoutComponent,
    canActivate: [authGuard],
  },
  {
    path: 'display',
    title: 'Display',
    component: DisplayComponent,
    canActivate: [authGuard],
  },
  {
    path: 'counter',
    title: 'Counter',
    component: CounterComponent,
    canActivate: [authGuard],
  },
  {
    path: 'list-fruits',
    title: 'List Fruits',
    component: ListFruitComponent,
    canActivate: [authGuard],
  },
  {
    path: 'todo',
    title: 'Todo',
    component: TodoParentComponent,
    canActivate: [authGuard],
  },
  {
    path: 'list-student',
    title: 'List Student',
    component: ListStudentComponent,
    canActivate: [authGuard],
  },
  {
    path: 'book',
    title: 'Book',
    component: BookHomeComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'book-list',
        component: BookListComponent,
      },
      {
        path: 'book-add',
        component: BookAddComponent,
      },
      {
        path: 'book-edit/:bookId',
        component: BookEditComponent,
      },
      {
        path: '',
        redirectTo: 'book-list',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'book-http',
    title: 'Book Http',
    component: BookHomeHttpComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'book-list-http',
        component: BookListHttpComponent,
      },
      {
        path: 'book-add-http',
        component: BookAddHttpComponent,
      },
      {
        path: 'book-edit-http/:bookId',
        component: BookEditHttpComponent,
      },
      {
        path: '',
        redirectTo: 'book-list-http',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '**',
    title: 'Not Found',
    component: NotFoundComponent,
  },
];
