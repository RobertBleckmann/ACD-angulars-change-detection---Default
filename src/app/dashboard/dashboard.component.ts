import {
  AfterViewChecked,
  Component,
  DoCheck,
  OnChanges,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor() {}

  logChangeDetection() {
    console.log('Dashboard rendered');
    return true;
  }
}
