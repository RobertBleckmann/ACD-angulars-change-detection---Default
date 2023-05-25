import {
  AfterViewChecked,
  Component,
  DoCheck,
  OnChanges,
  OnInit,
} from '@angular/core';
import { interval } from 'rxjs/internal/observable/interval';

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
