import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'study-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {
  @HostBinding('class')class = 'study-profile';
  constructor() { }

  ngOnInit(): void {
  }

}
