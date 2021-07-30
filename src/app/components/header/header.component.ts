import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  value: number = 0;

  constructor() {}

  ngOnInit(): void {}
  add() {
    this.value += 1;
  }

  subtract() {
    this.value -= 1;
  }
  multiply() {
    this.value *= 2;
  }

  divide() {
    this.value /= 2;
  }
}
