import {
  AfterViewChecked,
  Component,
  DoCheck,
  OnChanges,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-dash-two',
  templateUrl: './dash-two.component.html',
  styleUrls: ['./dash-two.component.css'],
})
export class DashTwoComponent {
  constructor() {}

  logChangeDetection() {
    console.log('Dash 2 rendered');
    return true;
  }
}
