import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
//import {map, switchMap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  // isLogged$: Observable<boolean> = this.authService.isAuth();
  constructor(private router: Router, private authService: AuthService) {}

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot ): | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>  | boolean | UrlTree {
    const homePageUrlTree = this.router.parseUrl('/login');
    // this.isLogged$.pipe(
    //   map((isLogged: boolean) => {
    //     console.log(isLogged);
    //     return isLogged ? true : homePageUrlTree;
    //     }
    //   ),
    // );

    if (this.authService.isAuth()) { return true; }

    return this.authService.isAuth() ? true : homePageUrlTree;
  }
}
