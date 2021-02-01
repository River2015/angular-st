import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ICourseEdited} from '../../models/course';
import {CoursesService} from '../../services/courses.service';


@Component({
  selector: 'study-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.less']
})
export class EditCourseComponent implements OnInit {
  course;
  id: number;
  courseEdited: ICourseEdited;

  constructor(private router: Router, private route: ActivatedRoute, private coursesService: CoursesService) {}

  ngOnInit(): any {
    this.id = Number(this.route.snapshot.params.id);
    this.coursesService.getCoursesId(this.id).subscribe((data) => {
      this.course = data;
    });
  }

  cancel(): void {
    this.router.navigateByUrl('/courses');
  }


  // TODO: get changed data from formfields in task "Form"

  save(): void {
    this.coursesService.updateCourse(this.id, this.course).subscribe(() => {
      this.router.navigate(['/courses']);
    });
  }

}
