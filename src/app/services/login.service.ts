import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User>{
    return this.http.get<User>('/api/user');
  }

  createUser(user:User): Observable<any>{
    return this.http.post('/api/user', user);
  }
}
