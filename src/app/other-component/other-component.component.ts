import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other-component',
  templateUrl: './other-component.component.html',
  styleUrls: ['./other-component.component.scss']
})
export class OtherComponentComponent implements OnInit {

  value = 'test';

  constructor() { }

  ngOnInit() {
  }

  handleInput($event) {
    this.value = $event.value;
  }
}
