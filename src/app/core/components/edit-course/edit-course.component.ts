import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ICourse} from '../../models/course';
import {COURSES} from '../../mocks';

@Component({
  selector: 'study-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.less']
})
export class EditCourseComponent implements OnInit {
  @Input() course: ICourse;
  courses: Array<ICourse> = COURSES;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): any {
    this.courses = this.courses.filter((course) => course.id === Number(this.route.snapshot.params.id));
  }

  cancel(): void {
    this.router.navigateByUrl('/courses');
  }

  save(): void {
    this.router.navigateByUrl('/courses');
  }

}
