import {Component} from '@angular/core';
import {Subject} from 'rxjs';
import {SpinnerService} from '../../services/spinner.service';

@Component({
  selector: 'study-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.less']
})
export class SpinnerComponent {
  isLoading: Subject<boolean> = this.loaderService.isLoading;

  constructor(private loaderService: SpinnerService){}
}
