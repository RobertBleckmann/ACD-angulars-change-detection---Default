import {
  AfterViewChecked,
  Component,
  DoCheck,
  OnChanges,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-dash-three',
  templateUrl: './dash-three.component.html',
  styleUrls: ['./dash-three.component.css'],
})
export class DashThreeComponent {
  constructor() {}

  logChangeDetection() {
    console.log('Dash 3 rendered');
    return true;
  }
}
