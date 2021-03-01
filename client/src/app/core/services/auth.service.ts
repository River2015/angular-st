import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {observable, Observable, of} from 'rxjs';
import {Router} from '@angular/router';
import {IUser} from '../models/user';
import {select, Store} from '@ngrx/store';
import {UserState} from '../components/login/store/user.reducer';

const API = 'http://localhost:3004/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // getState: Observable<any>;
  // isAuthenticated: string;
  constructor(private http: HttpClient, private router: Router, private store: Store<{user: UserState}>) {
    // this.getState = this.store.select('user');
  }

  loginUser(login: string, password: string): any {
      return this.http.post(API + 'login', {
        login,
        password
      }, httpOptions);
    }

    logoutUser(): void {
      const removeToken = localStorage.removeItem('user');
      if (removeToken == null) {
        this.router.navigate(['login']);
      }
    }

    getUser(): Observable<string> {
      // return this.getState.subscribe((state) => {
      //   this.isAuthenticated = state.token
      // });
      return JSON.parse(localStorage.getItem('user'))?.token;
    }

    isAuth(): Observable<boolean> {
      // return of (!!this.getState.subscribe((state) => {
      //   this.isAuthenticated = state.token
      // }));
      return of (!!localStorage.getItem('user'));
    }

    getUserProfile(token: Observable<string>): Observable<IUser> {
      return this.http.post<IUser>(API + 'userinfo', {
        token
      }, httpOptions);
    }
}
