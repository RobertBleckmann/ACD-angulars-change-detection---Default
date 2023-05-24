import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-one',
  templateUrl: './dash-one.component.html',
  styleUrls: ['./dash-one.component.css'],
})
export class DashOneComponent implements OnInit, DoCheck {
  constructor() {}

  ngOnInit() {}

  ngDoCheck() {
    console.log('Dash 1');
  }

  doSomething() {
    return;
  }
}
