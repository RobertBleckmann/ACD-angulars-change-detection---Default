import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit, DoCheck {
  constructor() {}

  ngOnInit() {}

  ngDoCheck() {
    console.log('Dashboard');
  }
}
