import {Component, HostBinding, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'study-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {
  @HostBinding('class')class = 'study-profile';
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  login(): any{
    console.log(this.authService.getUser());
  }
}
