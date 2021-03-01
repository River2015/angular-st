import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CoursesService} from '../../services/courses.service';
import {AddCourseSuccessAction} from '../courses/store/courses.actions';
import {Observable} from 'rxjs';
import {ICourse} from '../../models/course';
import {Store} from '@ngrx/store';
import {CoursesAppState} from '../../models/courses-state.model';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';

@Component({
  selector: 'study-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.less']
})
export class AddCourseComponent implements OnInit {
  newCourseItem = { id: 0, name: '', description: '', date: '', length: 0, author: [], isTopRated: true };
  form: FormGroup;
  loading$: Observable<boolean>;
  error$: Observable<Error>;
  maxTitle = 50;
  maxDescription = 250;

  constructor(private router: Router, private coursesService: CoursesService,
              private store: Store<CoursesAppState>, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loading$ = this.store.select(store => store.courses.loading);
    this.error$ = this.store.select(store => store.courses.error);
    this.createForm();
  }

  cancel(): void {
    this.router.navigateByUrl('/courses');
  }

  save(): void {
    this.newCourseItem.length = this.duration.value;
    this.newCourseItem.id = Number(new Date());
    this.newCourseItem.description = this.description.value;
    this.newCourseItem.date = this.description.value;
    this.newCourseItem.name = this.title.value;
    this.newCourseItem.author = [...this.newCourseItem.author, this.author.value]
    this.store.dispatch(new AddCourseSuccessAction(this.newCourseItem));
    this.router.navigate(['/courses']);
  }

  number(val): number {
    return Number(val);
  }

  private createForm(): void {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(this.maxTitle)]],
      description: [null, [Validators.required, Validators.maxLength(this.maxDescription)]],
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
