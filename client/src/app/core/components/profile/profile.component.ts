import {Component, HostBinding, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Observable, Subscription} from 'rxjs';
import {IUser} from '../../models/user';
import {map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'study-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {
  @HostBinding('class')class = 'study-profile';
  profile;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    const token$: Observable<string> = this.authService.getUser();
    console.log(token$)
    // this.profile = this.authService.getUserProfile(token$).subscribe()

    console.log(this.profile);
    this.authService.getUserProfile(token$).subscribe(
      profile => {
        this.profile = profile;
      },
      err => {
        console.log(err.error.message);
      }
    );
  }
  login(): any{
    console.log(this.authService.getUser());
  }
}
