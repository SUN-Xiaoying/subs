import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject} from 'rxjs';
import { User, IUser } from '../model/user.model';


@Injectable()
export abstract class AuthService implements IAuthService{

  readonly authStatus$ = new BehaviorSubject<IAuthStatus>(defaultAuthStatus)

  readonly currentUser$ = new BehaviorSubject<IUser>(new User())

  constructor() { }

  login(name: string, password: string): Observable<void> {
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
  readonly authStatus$ : BehaviorSubject<IAuthStatus>
  readonly currentUser$ :BehaviorSubject<IUser>
  login(email: string, password: string): Observable<void>
  logout(clearToken?: boolean): void
  getToken(): string
}

//====== Auth Status ======
export interface IAuthStatus {
  isAuthenticated: boolean
  userId: string
}

export interface IServerAuthResponse {
  accesstoken: string
}

export const defaultAuthStatus: IAuthStatus = {
  isAuthenticated: false,
  userId: ''
}