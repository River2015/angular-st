import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { Observable, of} from 'rxjs';
import { AuthService } from '../services/auth.service';
import {catchError, map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}
  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot ): | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>  | boolean | UrlTree {
    return this.authService.isAuth().pipe(
      map((resp) => {
      if (resp) {
        return true;
      }
      this.router.parseUrl('/login');
      return false;
    }), catchError((error) => {
      this.router.navigate(['/login']);
      return of(false);
    }));
  }
}
