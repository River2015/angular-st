import {Component, HostBinding, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'study-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {
  @HostBinding('class')class = 'study-header';

  isAuth: Observable<boolean>;

  constructor(private authService: AuthService, private router: Router, public translate: TranslateService) { }

  ngOnInit(): void {
    this.isAuth = this.authService.isAuth();
    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang('en');

    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|es/) ? browserLang : 'en');
  }

  logout(): any {
    console.log(this.authService.getUser());
    this.authService.logoutUser();
    this.router.navigateByUrl('/login');
  }
}
