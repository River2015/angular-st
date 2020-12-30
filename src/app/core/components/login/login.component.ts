import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'study-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  name = '';
  password = '';
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  login(): any{
    this.authService.loginUser();
    console.log(this.authService.getUser(), 'login successfully');
  }
}
