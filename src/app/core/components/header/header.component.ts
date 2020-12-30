import {Component, HostBinding, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'study-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {
  @HostBinding('class')class = 'study-header';

  isAuth = true;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.isAuth = this.authService.isAuth();
  }

  logout(): any {
    console.log(this.authService.getUser().name);
    this.authService.logoutUser();
  }
}
