import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {ICourse} from '../../../../models/course';


@Component({
  selector: 'study-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.less']
})
export class CourseComponent implements OnInit {
  @HostBinding('class')class = 'study-course';

  @Input() course: ICourse;

  @Output() courseDelete: EventEmitter<number> = new EventEmitter<number>();
  constructor() {
  }

  ngOnInit(): void {
  }

  edit(): void {
    console.log('edit');
  }

  delete(): void {
    this.courseDelete.emit(this.course.id);
  }
}

