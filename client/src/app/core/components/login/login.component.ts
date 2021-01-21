import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'study-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  name = '';
  password = '';
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  login(): any{
    this.authService.loginUser('Morales', 'id');
    console.log(this.authService.getUser(), 'login successfully');
  }
}
