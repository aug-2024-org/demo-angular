import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;

  constructor() { }

  storeToken(token: string): void {
    sessionStorage.setItem('token', token);
  }

  retrieveToken(): string | null {
    return sessionStorage.getItem('token');
  }

  removeToken(): void {
    sessionStorage.removeItem('token');
  }

  storeUser(user: any): void {
    sessionStorage.setItem('user', JSON.stringify(user));
  }

  retrieveUser(): any {
    const user = sessionStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  removeUser(): void {
    sessionStorage.removeItem('user');
  }

  retrieveRole(): string | null {
    const user = this.retrieveUser();
    return user ? user.userRole : null;
  }
}
