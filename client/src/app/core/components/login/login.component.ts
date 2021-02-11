import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {CoursesAppState} from '../../models/courses-state.model';
import {Login} from './store/user.actions';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'study-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  // token;
  form: FormGroup;

  constructor(private authService: AuthService,
              private store: Store<CoursesAppState>,
              private router: Router,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    // this.store.subscribe(state =>
    //   this.token = state.user.token
    // );
    this.createForm();
    this.store.subscribe(state =>
      console.log(state)
  );
  }
  login(): any{
    this.store.dispatch(new Login(this.form.value));
   // this.authService.getUser();
    this.router.navigateByUrl('/courses');
  }

  private createForm(): void {
    this.form = this.fb.group({
      login: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }
}
