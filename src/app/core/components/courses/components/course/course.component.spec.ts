import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseComponent } from './course.component';
import {By} from '@angular/platform-browser';
import { Component } from '@angular/core';
import {ICourse} from '../../../../models/course';

@Component({
  template:
      `<study-course
          (courseDelete)="delete($event)"
          [course]="course"
        ></study-course>`
})

class TestHostComponent {
  course: ICourse = {
      id: 1,
      title: 'Video course 1',
      duration: 90,
      creation: '12.12.2020',
      description: 'A component instance has a lifecycle that starts when Angular instantiates the component class and renders the component view along with its child views. The lifecycle continues with change detection, as Angular checks to see when'
    };

  deletedCourseId: number;

  delete(deletedCourseId: number): void {
    deletedCourseId = deletedCourseId;
  }
}

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

  it('should create as TestBed', () => {
    expect(component).toBeTruthy();
  });

  it('should emit edit, action once clicked as TestBed', () => {
    const spy = spyOn(component, 'edit');
    fixture.debugElement.query(By.css('button.study-courses__edit-btn')).triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });

  it('should emit delete action once clicked as TestBed', () => {
    const spy = spyOn(component, 'delete');
    fixture.debugElement.query(By.css('button.study-courses__delete-btn')).triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });

  it('should log message on edit as TestBed', () => {
    const editSpy = spyOn(console, 'log');
    component.edit();
    expect(editSpy).toHaveBeenCalled();
  });

  it('should raise id for deleting  event when clicked (triggerEventHandler) as TestBed', () => {
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

  it('should create class', () => {
    expect(component).toBeTruthy();
  });

  it('should log message on edit in class', () => {
    spyOn(console, 'log');
    component.edit();
    expect(console.log).toHaveBeenCalled();
  });

  it('should raise id for deleting  event when clicked in class', () => {
    component.courseDelete.subscribe((deletedId: 1) => expect(deletedId).toBe(1));
    // comp.selected.subscribe((deletedItem: 1) => expect(deletedItem).toBe(1));
    component.delete();
  });
});

describe('CourseComponent with host', () => {
  let testHost;
  let testEl;
  let testDe;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseComponent, TestHostComponent ],
    });
    const fixture = TestBed.createComponent(TestHostComponent);​
    testHost = fixture.componentInstance;​
    testEl = fixture.nativeElement.querySelector('study-course');
    testDe = fixture.debugElement.query(By.css('button.study-courses__delete-btn'));
    fixture.detectChanges();
  });

  it('should create p with host', () => {
    const title = testEl.querySelector('p');
    const content = testHost.course.title;
    expect(title.textContent).toContain(content);
  });

  it('should raise delete id event when clicked with host', () => {
    testDe.triggerEventHandler('click', null);
    expect(testHost.deletedCourseId).toBe(testHost.course.id);
  });
});



