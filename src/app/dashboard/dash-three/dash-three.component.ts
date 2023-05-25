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
export class DashThreeComponent implements AfterViewChecked {
  constructor() {}

  ngAfterViewChecked() {
    console.log('Dash 3');
  }

  doSomething() {
    return;
  }
}
