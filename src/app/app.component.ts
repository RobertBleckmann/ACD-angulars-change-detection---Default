import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, DoCheck {
  constructor() {}

  ngOnInit() {}

  ngDoCheck() {
    console.log('App Component');
  }
}