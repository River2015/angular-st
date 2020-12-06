import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseComponent } from './course.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
    component.courseDelete.subscribe((hero: 1) => deletedId = hero);
    const heroDe = fixture.debugElement.query(By.css('button.study-courses__delete-btn'));
    heroDe.triggerEventHandler('click', null);
    expect(deletedId).toBe(1);
  });
});
