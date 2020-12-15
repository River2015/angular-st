import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseComponent } from './course.component';
import {By} from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  template:
      `<study-course
    class="study-course"
    (courseDelete)="delete($event)"
    *ngFor="let course of courses"
    [course]="course"
  ></study-course>`
})
class TestHostComponent {
  courses = [
    {
      id: 1,
      title: 'Video course 1',
      duration: 90,
      creation: '12.12.2020',
      description: 'A component instance has a lifecycle that starts when Angular instantiates the component class and renders the component view along with its child views. The lifecycle continues with change detection, as Angular checks to see when'
    },
    {
      id: 2,
      title: 'Video course 2',
      duration: 120,
      creation: '14.12.2020',
      description: 'A component instance has a lifecycle that starts when Angular instantiates the component class and renders the component view along with its child views. The lifecycle continues with change detection, as Angular checks to see when'
    },
    {
      id: 3,
      title: 'Video course 3',
      duration: 60,
      creation: '10.12.2020',
      description: 'A component instance has a lifecycle that starts when Angular instantiates the component class and renders the component view along with its child views. The lifecycle continues with change detection, as Angular checks to see when'
    }
  ];
  delete(id: number): void {
    this.courses = this.courses.filter((course) => course.id !== id);
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
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseComponent, TestHostComponent ],
    });
    const fixture = TestBed.createComponent(TestHostComponent);​
    testHost = fixture.componentInstance;​
    testEl = fixture.debugElement.query(By.css('study-course'));
  });

  it('should raise delete id event when clicked with host', () => {
    expect(testEl).toBeTruthy();
  });

  it('should raise delete id event when clicked with host', () => {
    const deletedId = 1;
    testEl.triggerEventHandler('click', null);​
    expect(testHost.delete).toBe(testHost.courses.filter((course, ind) => ind !== deletedId));
  });
});



