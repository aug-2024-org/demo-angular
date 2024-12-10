import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css',
})
export class LogoutComponent {
  constructor(private auth: AuthService, private router: Router) {}
  ngOnInit() {
    this.auth.removeToken();
    this.auth.removeUser();
    this.auth.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}
