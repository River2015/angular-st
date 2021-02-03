import {Component, HostBinding, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Observable, Subscription} from 'rxjs';
import {IUser} from '../../models/user';
import {map, switchMap} from 'rxjs/operators';
import {select, Store} from '@ngrx/store';
import {CoursesAppState} from '../../models/courses-state.model';
import {GetProfile, Login} from '../login/store/user.actions';
import {selectUser} from '../login/store/user.selectors';

@Component({
  selector: 'study-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {
  @HostBinding('class')class = 'study-profile';
  profile;
  constructor(private authService: AuthService, private store: Store<CoursesAppState>) {
    this.store.subscribe(state =>
      this.profile = state
    );
  }

  ngOnInit(): void {
    const token$: Observable<string> = this.authService.getUser();
    this.store.dispatch(new GetProfile(token$));
  }

  getInfo(): any{
    console.log(this.authService.getUser());
  }
}
