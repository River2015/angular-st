import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'study-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {
  @HostBinding('class')class = 'study-header';
  constructor() { }

  ngOnInit(): void {
  }

}
