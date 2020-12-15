import {Directive, ElementRef, Input, OnInit, TemplateRef} from '@angular/core';

import {ICourse} from '../../../models/course';

@Directive({
  selector: '[appCourseBorder]',
})
export class CourseBorderDirective implements OnInit {
  @Input() creation: number;

  currentDuration = 90;
  constructor(private element: ElementRef) {

  }
  ngOnInit(): void {
    if (this.creation >= this.currentDuration) {
      this.element.nativeElement.style.border = '1px solid green';
    } else {
      this.element.nativeElement.style.border = '1px solid blue';
    }
  }
}
