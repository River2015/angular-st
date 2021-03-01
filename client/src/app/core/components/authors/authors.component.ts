import {ChangeDetectionStrategy, Component, forwardRef, Input, OnInit, ChangeDetectorRef} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormBuilder,
  FormGroup,
  NG_VALUE_ACCESSOR, ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';
import {CoursesService} from '../../services/courses.service';
import {IAuthor} from '../../models/course';
import {debounceTime, distinctUntilChanged, filter, switchMap, tap} from 'rxjs/operators';
import { Subject, Subscription} from 'rxjs';

@Component({
  selector: 'study-authors',
  templateUrl: './authors.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./authors.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AuthorsComponent),
      multi: true,
    },
  ],
})
export class AuthorsComponent implements OnInit, ControlValueAccessor  {
  @Input() authorsGet: any;
  value: string;
  filteredMovies: any;
  authorsAll: IAuthor[] = [];
  totalAuthors: IAuthor[];
  term$ = new Subject<any>();
  form: FormGroup;

  private searchSubscription: Subscription;

  constructor(private fb: FormBuilder,  private coursesService: CoursesService, private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.searchSubscription = this.term$.pipe(
      debounceTime(1000),
      filter(value => value.length > 0),
      distinctUntilChanged(),
      switchMap(value => this.coursesService.getAuthors(value))
    ).subscribe(data => {
      this.filteredMovies = data;
      this.ref.markForCheck();
    });
    this.createForm();
  }

  get authorsCtrl(): AbstractControl {
    return this.form.get('authors');
  }

  // tslint:disable-next-line:typedef
  writeValue() {}

  // tslint:disable-next-line:no-any
  registerOnChange(fn: (_: unknown) => void): void {
    this.onChange = fn;
  }

  // tslint:disable-next-line:typedef
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  changeAuthor(author): any {
    this.authorsAll =  [...this.authorsAll, author];
    this.authorsGet = [...this.authorsGet, author];
    this.totalAuthors = (this.authorsGet) ? this.authorsGet : this.authorsAll;
    this.onChange(this.totalAuthors);
  }

  onBlur() {
    this.onTouched();
  }

  delete(id): void{
    this.authorsAll = this.authorsAll.filter(item => item.id !== id);
  }

  private createForm(): void {
    this.form = this.fb.group({
      authors: ['', [Validators.required, this.checkAuthor()]],
    });
  }

  private checkAuthor(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const validAuthor: boolean = control.value;
      return validAuthor ? null : { invalidAuthor: true };
    };
  }
  private onChange: (val: any) => void = (_: any) => {};
  private onTouched: () => void = () => {};
}
