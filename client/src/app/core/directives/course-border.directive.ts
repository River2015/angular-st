import {Directive, ElementRef, Input, OnInit} from '@angular/core';


@Directive({
  selector: '[appCourseBorder]',
})
export class CourseBorderDirective implements OnInit {
  @Input() creation: string;

  private currentDate;
  private differenceDate;
  private creationDate;
  constructor(private element: ElementRef) {
  }
  ngOnInit(): void {
    this.currentDate = new Date();
    this.creationDate = new Date(this.creation);
    this.differenceDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 14);

    if (this.creationDate < this.currentDate && this.creationDate >=  this.differenceDate) {
      this.element.nativeElement.style.border = '1px solid green';
    } else if (this.creationDate > this.currentDate ) {
      this.element.nativeElement.style.border = '1px solid blue';
    } else { return; }
  }
}
