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
  loading = false;


  constructor(
    private searchPipe: SearchPipe,
    private coursesService: CoursesService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.start = 0;
    this.count = 10;
    this.courses = this.coursesService.getCourses(this.start, this.count);
  }

  onSearchPass(searchText: string): any{
    this.courses = this.coursesService.searchCourse(searchText);
  }

  loadMore(): void {
    this.start  = this.start + this.count + 1;
    this.courses = this.coursesService.getCourses(this.start, this.count);
  }

  delete(id: number): void {
    const isConfirm = confirm('Are you sure to delete item?');
    if (isConfirm){
      this.courses = this.coursesService.removeCourse(id);

    } else { return; }
  }

  edit(id: number): void {
    this.coursesService.getCoursesId(id).subscribe((data) => {
      this.course = data;
    });
  }

  add(): void {
    this.router.navigateByUrl('courses/add');
  }
}
