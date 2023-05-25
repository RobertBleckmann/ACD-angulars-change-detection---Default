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
export class DashTwoComponent implements AfterViewChecked {
  constructor() {}

  ngAfterViewChecked() {
    console.log('Dash 2');
  }

  doSomething() {
    return;
  }
}
