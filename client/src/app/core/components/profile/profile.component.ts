import {Component, HostBinding, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'study-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {
  @HostBinding('class')class = 'study-profile';
  data;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    const token = this.authService.getUser();
    this.authService.getUserProfile(token).subscribe(
      data => {
        this.data = data;
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
