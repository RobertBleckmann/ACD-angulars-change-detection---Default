import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-two',
  templateUrl: './dash-two.component.html',
  styleUrls: ['./dash-two.component.css'],
})
export class DashTwoComponent implements OnInit, DoCheck {
  constructor() {}

  ngOnInit() {}

  doSomething() {
    return;
  }

  ngDoCheck() {
    console.log('Dash 2');
  }
}
