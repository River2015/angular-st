import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IAuthor, ICourse} from '../../models/course';
import {CoursesService} from '../../services/courses.service';
import { LoadCoursesAction} from '../courses/store/study-courses.actions';
import {Store} from '@ngrx/store';
import {CoursesAppState} from '../../models/courses-state.model';


@Component({
  selector: 'study-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.less']
})
export class EditCourseComponent implements OnInit {
  course: ICourse;
  @Input() editedCourseItem = { id: 0, name: '', description: '', date: '', length: 0, author: [], isTopRated: true };

  value = '';
  id: number;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private coursesService: CoursesService,
              private store: Store<CoursesAppState>
  ) {}

  ngOnInit(): any {
    this.id = Number(this.route.snapshot.params.id);
    this.coursesService.getCoursesId(this.id).subscribe((data) => {
      this.course = data;
    });

  }

  cancel(): void {
    this.router.navigateByUrl('/courses');
  }

  focusoutHandlerName(event): void {
    this.editedCourseItem.name = event.target.value || this.course.name;
  }

  focusoutHandlerDate(event): void {
    this.editedCourseItem.date = event.target.value || this.course.date;
  }

  focusoutHandlerDescription(event): void {
    this.editedCourseItem.description = event.target.value || this.course.description;
  }

  focusoutHandlerAuthor(event): void {
    this.editedCourseItem.author = event.target.value || this.course.author;
  }

  focusoutHandlerLength(event): void {
    this.editedCourseItem.length = event.target.value || this.course.length;
  }


  // TODO: get changed data from formfields in task "Form"

  save(): void {
    this.coursesService.updateCourse(this.id, this.editedCourseItem).subscribe(() => {
      this.router.navigate(['/courses']);
    });
    this.store.dispatch(new LoadCoursesAction());
  }

}
