import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../login.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  errorMessage: string = '';

  constructor(
    private loginService: LoginService,
    private authService: AuthService,
    private router: Router
  ) {}

  handleFormSubmit(myForm: any) {
    console.log('myForm:', myForm.value);
    this.loginService.validate(myForm.value).subscribe({
      next: (data) => {
        console.log('data : ', data);
        if (data.userPassword == myForm.value.userPassword) {
          this.errorMessage = 'Login Successfull';
          this.authService.storeToken(data.token);
          this.authService.storeUser({
            id: data.id,
            userName: data.userName,
            userRole: data.userRole,
          });
          this.authService.isLoggedIn = true;
          if (data.userRole == 'admin') {
            this.router.navigate(['/book-http/book-list-http']);
          } else if (data.userRole == 'user') {
            this.router.navigate(['/display']);
          }
        } else {
          this.errorMessage = 'Invalid User Id/password';
        }
      },
      error: (err) => {
        console.log('error : ', err);
        this.errorMessage = 'Invalid User Id/password';
      },
    });
  }
}
