import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IAuthor, ICourse} from '../../models/course';
import {CoursesService} from '../../services/courses.service';
import { EditCourseAction, LoadCoursesAction} from '../courses/store/courses.actions';
import {Store} from '@ngrx/store';
import {CoursesAppState} from '../../models/courses-state.model';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';


@Component({
  selector: 'study-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.less']
})
export class EditCourseComponent implements OnInit {
  course: ICourse;
  form: FormGroup;
  value = '';
  id: number;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private coursesService: CoursesService,
              private store: Store<CoursesAppState>,
              private fb: FormBuilder
  ) {}

  ngOnInit(): any {
    this.id = Number(this.route.snapshot.params.id);
    this.coursesService.getCoursesId(this.id).subscribe((data) => {
      this.course = data;
    });
    this.createForm();
  }

  cancel(): void {
    this.router.navigateByUrl('/courses');
  }

  save(): void {
    const editedCourseItem: ICourse = {
      length: this.duration.value || this.course.length,
      id: this.id,
      description: this.description.value || this.course.description,
      date: this.date.value || this.course.date,
      name: this.title.value || this.course.name,
      author: [ this.author.value] || this.course.author,
      isTopRated: true,
    };

    const payload = {
      id: this.id,
      course: editedCourseItem,
    };
    this.store.dispatch(new EditCourseAction(payload));
    this.router.navigate(['/courses']);
    // this.coursesService.updateCourse(this.id, this.editedCourseItem).subscribe(() => {
    //   this.router.navigate(['/courses']);
    // });
    this.store.dispatch(new LoadCoursesAction());
  }

  private createForm(): void {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(5)]],
      description: [null, [Validators.required, Validators.maxLength(15)]],
      duration: [null, [
        Validators.required,
        Validators.pattern(/^[0-9]+(?!.)/)
      ]],
      date: [null, [Validators.required, Validators.pattern(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/)]],
      author: [null, [Validators.required, this.checkAuthor()]],
    });
  }

  get title(): AbstractControl {
    return this.form.get('title');
  }

  get description(): AbstractControl {
    return this.form.get('description');
  }

  get duration(): AbstractControl {
    return this.form.get('duration');
  }

  get date(): AbstractControl {
    return this.form.get('date');
  }

  get author(): AbstractControl {
    return this.form.get('author');
  }

  private checkAuthor(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const validAuthor: boolean = control.value;
      return validAuthor ? null : { invalidAuthor: true };
    };
  }

}
