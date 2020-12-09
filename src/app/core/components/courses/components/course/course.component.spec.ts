import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseComponent } from './course.component';
import {By} from '@angular/platform-browser';
import {CoursesComponent} from '../../courses.component';

describe('CourseComponent as TestBed', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    const course =
      {
        id: 1,
        title: 'Video course 1',
        duration: 90,
        creation: '12.12.2020',
        description: 'A component instance has a lifecycle that starts when Angular instantiates the component class and renders the component view along with its child views. The lifecycle continues with change detection, as Angular checks to see when'
      };
    component.course = course;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit edit, action once clicked', () => {
    const spy = spyOn(component, 'edit');
    fixture.debugElement.query(By.css('button.study-courses__edit-btn')).triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });

  it('should emit delete action once clicked', () => {
    const spy = spyOn(component, 'delete');
    fixture.debugElement.query(By.css('button.study-courses__delete-btn')).triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });

  it('should log message on edit', () => {
    const editSpy = spyOn(console, 'log');
    component.edit();
    expect(editSpy).toHaveBeenCalled();
  });

  it('should raise id for deleting  event when clicked (triggerEventHandler)', () => {
    let deletedId: 1;
    component.courseDelete.subscribe((id: 1) => deletedId = id);
    const courseDe = fixture.debugElement.query(By.css('button.study-courses__delete-btn'));
    courseDe.triggerEventHandler('click', null);
    expect(deletedId).toBe(1);
  });
});

describe('CourseComponent as class', () => {
  let component: CourseComponent;

  beforeEach( () => {
    component = new CourseComponent();
    const course =
        {
          id: 1,
          title: 'Video course 1',
          duration: 90,
          creation: '12.12.2020',
          description: 'A component instance has a lifecycle that starts when Angular instantiates the component class and renders the component view along with its child views. The lifecycle continues with change detection, as Angular checks to see when'
        };
    component.course = course;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should log message on edit', () => {
    spyOn(console, 'log');
    component.edit();
    expect(console.log).toHaveBeenCalled();
  });

  it('should raise id for deleting  event when clicked', () => {
    let deletedId: 1;
    component.courseDelete.subscribe((id: 1) => deletedId = id);
    component.delete();
  });
});
describe('CourseComponent with host', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseComponent, CoursesComponent ],
    });
  });

  it('should raise delete id event when clicked', () => {
    const fixture = TestBed.createComponent(CoursesComponent);​
    const testHost = fixture.componentInstance;​
    const testEl = fixture.debugElement.query(By.css('.study-course'));
    const deletedId = 1;
    testEl.triggerEventHandler('click', null);​
    expect(testHost.delete).toBe(testHost.courses.filter((course, ind) => ind !== deletedId));
  });
});



