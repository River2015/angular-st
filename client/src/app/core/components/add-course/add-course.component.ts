import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CoursesService} from '../../services/courses.service';

@Component({
  selector: 'study-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.less']
})
export class AddCourseComponent implements OnInit {
  value = '';

  @Input() courses = { id: 0, name: '', date: '', length: 0, author: [], isTopRated: true };

  constructor(private router: Router, private coursesService: CoursesService) { }

  ngOnInit(): void {
  }

  onEnter(value: string): void {
    this.value = value;
  }
  cancel(): void {
    this.router.navigateByUrl('/courses');
  }

  save(): void {
    this.coursesService.addCourse(this.courses).subscribe(() => {
      this.router.navigate(['/courses']);
    });
  }

  number(val): number {
    return Number(val);
  }
}
