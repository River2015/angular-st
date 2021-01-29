import {ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, OnInit, Output,} from '@angular/core';
import {ICourse} from '../../../../models/course';
import {Router} from '@angular/router';


@Component({
  selector: 'study-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseComponent implements OnInit {
  @HostBinding('class')class = 'study-course';

  @Input() course: ICourse;

  @Output() courseDelete: EventEmitter<number> = new EventEmitter<number>();
  @Output() courseEdit: EventEmitter<number> = new EventEmitter<number>();
  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  edit(): void {
    this.courseEdit.emit(this.course.id);
    this.router.navigate([ 'courses', 'edit', this.course.id]);
  }

  delete(): void {
    this.courseDelete.emit(this.course.id);
  }
}

