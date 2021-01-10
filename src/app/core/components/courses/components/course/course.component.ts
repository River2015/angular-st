import {ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, OnInit, Output,} from '@angular/core';
import {ICourse} from '../../../../models/course';
import {Router} from '@angular/router';
import {COURSES} from '../../../../mocks';


@Component({
  selector: 'study-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseComponent implements OnInit {
  @HostBinding('class')class = 'study-course';
  courses: Array<ICourse> = COURSES;

  @Input() course: ICourse;

  @Output() courseDelete: EventEmitter<number> = new EventEmitter<number>();
  @Output() courseEdit: EventEmitter<number> = new EventEmitter<number>();
  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  edit(): void {
    this.router.navigate([ 'courses', 'edit', this.course.id]);
  }

  delete(): void {
    this.courseDelete.emit(this.course.id);
  }
}

