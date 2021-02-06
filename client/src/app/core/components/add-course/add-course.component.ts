import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CoursesService} from '../../services/courses.service';

@Component({
  selector: 'study-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.less']
})
export class AddCourseComponent implements OnInit {
  value = '';

  @Input() newCourseItem = { id: 0, name: '', description: '', date: '', length: 0, author: [], isTopRated: true };

  constructor(private router: Router, private coursesService: CoursesService) { }

  ngOnInit(): void {
  }

  onEnter(value: string): void {
    this.value = value;
  }
  cancel(): void {
    this.router.navigateByUrl('/courses');
  }

  save(): void {
    this.newCourseItem.id = Number(new Date());
    this.coursesService.addCourse(this.newCourseItem).subscribe(() => {
      this.router.navigate(['/courses']);
    });
  }

  number(val): number {
    return Number(val);
  }

  focusoutHandlerName(event): void {
    this.newCourseItem.name = event.target.value;
  }

  focusoutHandlerDate(event): void {
    this.newCourseItem.date = event.target.value;
  }

  focusoutHandlerDescription(event): void {
    this.newCourseItem.description = event.target.value;
  }

  focusoutHandlerAuthor(event): void {
    this.newCourseItem.author = event.target.value;
  }

  focusoutHandlerLength(event): void {
    this.newCourseItem.length = event.target.value;
  }
}
