import {Component, HostBinding, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'study-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {
  @HostBinding('class')class = 'study-header';

  isAuth: Observable<boolean>;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.isAuth = this.authService.isAuth();
  }

  logout(): any {
    console.log(this.authService.getUser());
    this.authService.logoutUser();
    this.router.navigateByUrl('/login');
  }
}
