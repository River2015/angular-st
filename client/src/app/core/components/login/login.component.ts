import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {CoursesAppState} from '../../models/courses-state.model';
import {Login} from './store/user.actions';

@Component({
  selector: 'study-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  name = '';
  password = '';

  payload = { login: 'Morales', password: 'id'}
  constructor(private authService: AuthService,
              private store: Store<CoursesAppState>,
              private router: Router) { }

  ngOnInit(): void {
  }
  login(): any{
    // this.store.dispatch(new Login(this.payload));
    // this.router.navigateByUrl('/courses');
    this.authService.loginUser('Morales', 'id');
    console.log(this.authService.getUser(), 'login successfully');
  }
}
