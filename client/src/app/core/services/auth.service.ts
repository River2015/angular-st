import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';

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

    getUser(): string {
      return JSON.parse(localStorage.getItem('user'));
    }

    isAuth(): boolean {
      return !!localStorage.getItem('user');
    }

    getUserProfile(token: string): Observable<any> {
      return this.http.post(API + 'userinfo', {
        token
      }, httpOptions);
    }
}
