import {Directive, ElementRef, Input, OnInit} from '@angular/core';



@Directive({
  selector: '[appCourseBorder]',
})
export class CourseBorderDirective implements OnInit {
  @Input() creation: string;

  currentDate;
  differenceDate;
  constructor(private element: ElementRef) {
  }
  ngOnInit(): void {
    this.currentDate = new Date();
    this.differenceDate = 	new Date().setDate(this.currentDate.getDate() - 14 ).toLocaleString();

    if (
      this.creation < this.currentDate.toLocaleString() && this.creation >=  this.differenceDate
    ) {
      this.element.nativeElement.style.border = '1px solid green';
    } else if (this.creation > this.currentDate.toLocaleString() ) {
      this.element.nativeElement.style.border = '1px solid blue';
    } else { return; }
  }
}
