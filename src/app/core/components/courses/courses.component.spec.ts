import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesComponent } from './courses.component';
import {CourseComponent} from './components/course/course.component';
import {CoursesSearchComponent} from './components/courses-search/courses-search.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesComponent, CourseComponent, CoursesSearchComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit add, action once clicked', () => {
    const spyAdd = spyOn(component, 'add');
    fixture.debugElement.query(By.css('button.study-courses__add-btn')).triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(spyAdd).toHaveBeenCalled();
  });

  it('should emit loadMore action once clicked', () => {
    const spyLoadMore = spyOn(component, 'loadMore');
    fixture.debugElement.query(By.css('button.study-courses__more-btn')).triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(spyLoadMore).toHaveBeenCalled();
  });

  it('should log message on loadMore', () => {
    const loadMoreSpy = spyOn(console, 'log');
    component.loadMore();
    expect(loadMoreSpy).toHaveBeenCalled();
  });

  it('should log message on add', () => {
    const addSpy = spyOn(console, 'log');
    component.add();
    expect(addSpy).toHaveBeenCalled();
  });
});
