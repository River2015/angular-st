import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {observable, Observable, of} from 'rxjs';
import {Router} from '@angular/router';
import {IUser} from '../models/user';

const API = 'http://localhost:3004/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  loginUser(login: string, password: string): any {
      return this.http.post(API + 'login', {
        login,
        password
      }, httpOptions)
        .subscribe((res: any) => {
          localStorage.setItem ('user', JSON.stringify(res.token));
          this.router.navigateByUrl('/courses');
        });
    }

    logoutUser(): void {
      const removeToken = localStorage.removeItem('user');
      if (removeToken == null) {
        this.router.navigate(['login']);
      }
    }

    getUser(): Observable<string> {
      return JSON.parse(localStorage.getItem('user'));
    }

    isAuth(): Observable<boolean> {
      return of (!!localStorage.getItem('user'));
    }

    getUserProfile(token: Observable<string>): Observable<IUser> {
      return this.http.post<IUser>(API + 'userinfo', {
        token
      }, httpOptions);
    }
}
