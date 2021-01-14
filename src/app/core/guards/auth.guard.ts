import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot ): | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>  | boolean | UrlTree {
    console.log(this.authService.isAuth());
    if (this.authService.isAuth()) { return true; }

    const homePageUrlTree = this.router.parseUrl('/course');

    return this.authService.isAuth() ? true : homePageUrlTree;
  }
}
