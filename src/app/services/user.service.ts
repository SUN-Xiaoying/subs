import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class UserService implements IAuthService{

  // readonly authStatus$ = new BehaviorSubject<IAuthStatus>(defaultAuthStatus)  
  // readonly currentUser$ = new BehaviorSubject<IUser>(new User())
  
  constructor() { }

  login(email: string, password: string): Observable<void> {
    throw new Error('Method not implemented.')
  }
  logout(clearToken?: boolean): void {
    throw new Error('Method not implemented.')
  }
  getToken(): string {
    throw new Error('Method not implemented.')
  }
}

export interface IAuthService {
  // readonly authStatus$: BehaviorSubject<IAuthStatus>
  // readonly currentUser$: BehaviorSubject<IUser>
  login(email: string, password: string): Observable<void>
  logout(clearToken?: boolean): void
  getToken(): string
}