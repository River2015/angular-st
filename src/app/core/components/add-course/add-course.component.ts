import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'study-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.less']
})
export class AddCourseComponent implements OnInit {
  value = '';

  constructor() { }

  ngOnInit(): void {
  }
  onEnter(value: string): void {
    this.value = value;
  }
  cancel(): void {
    console.log('cancel');
  }

  save(): void {
    console.log('save');
  }

  number(val): number {
    return Number(val);
  }
}
