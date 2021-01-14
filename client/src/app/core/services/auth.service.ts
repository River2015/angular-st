import { Injectable } from '@angular/core';
import { IUser } from '../models/user';
import { USER } from '../mocks';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: IUser = USER;

  constructor() { }

    loginUser(): void {
      localStorage.setItem ('user', JSON.stringify(this.user));
    }

    logoutUser(): void {
      localStorage.clear();
    }

    getUser(): IUser {
      const user = JSON.parse(localStorage.getItem('user'));
      return user;
    }

    isAuth(): boolean {
      return !!localStorage.getItem('user');
    }

}
