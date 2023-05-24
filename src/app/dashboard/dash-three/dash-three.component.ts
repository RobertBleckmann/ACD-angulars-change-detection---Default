import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-three',
  templateUrl: './dash-three.component.html',
  styleUrls: ['./dash-three.component.css'],
})
export class DashThreeComponent implements OnInit, DoCheck {
  constructor() {}

  ngOnInit() {}

  doSomething() {
    return;
  }

  ngDoCheck() {
    console.log('Dash 3');
  }
}
