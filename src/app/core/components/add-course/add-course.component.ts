import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'study-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.less']
})
export class AddCourseComponent implements OnInit {
  value = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onEnter(value: string): void {
    this.value = value;
  }
  cancel(): void {
    this.router.navigateByUrl('/courses');
  }

  save(): void {
    this.router.navigateByUrl('/courses');
  }

  number(val): number {
    return Number(val);
  }
}
