import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  baseUrl: string = 'http://localhost:3000/users';
  constructor(private httpClient: HttpClient) {}

  validate(user: any): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/${user.id}`);
  }
}
