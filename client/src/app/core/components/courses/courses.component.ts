import {Component, HostBinding, OnInit} from '@angular/core';
import {SearchPipe} from '../../pipes/search.pipe';
import {CoursesService} from '../../services/courses.service';
import {Router} from '@angular/router';

@Component({
  selector: 'study-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.less'],
})

export class CoursesComponent implements OnInit {
  @HostBinding('class')class = 'study-courses';
  courses;
  start: number;
  count: number;
  name: string;
  course;

  constructor(
    private searchPipe: SearchPipe,
    private coursesService: CoursesService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.start = 0;
    this.count = 10;
    this.courses = this.coursesService.getCourses(this.start, this.count);
  }

  loadMore(): void {
    this.start  = this.start + this.count + 1;
    this.courses = this.coursesService.getCourses(this.start, this.count);
  }

  delete(id: number): void {
    const isConfirm = confirm('Are you sure to delete item?');
    if (isConfirm){
      this.coursesService.removeCourse(id);
      this.start = 0;
      this.count = 10;
      this.courses = this.coursesService.getCourses(this.start, this.count);

    } else { return; }
  }

  edit(id: number): void {
    this.coursesService.getCoursesId(id).subscribe((data) => {
      this.course = data;
    });
  }

  search(textFragment: string): any {
    // this.courses = this.coursesService.getCourses(textFragment);
    if (!textFragment) {
      this.ngOnInit();
    } else {
      this.courses = this.coursesService.getCourses(textFragment);
    }
  }

  add(): void {
    this.router.navigateByUrl('courses/add');
  }
}
