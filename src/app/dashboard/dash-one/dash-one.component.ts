import {
  AfterViewChecked,
  Component,
  DoCheck,
  OnChanges,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-dash-one',
  templateUrl: './dash-one.component.html',
  styleUrls: ['./dash-one.component.css'],
})
export class DashOneComponent {
  constructor() {}

  logChangeDetection() {
    console.log('Dash 1 rendered');
    return true;
  }
}
