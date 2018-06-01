import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-other-component',
  templateUrl: './other-component.component.html',
  styleUrls: ['./other-component.component.scss']
})
export class OtherComponentComponent implements OnInit {
  @Output()
  changeInput: EventEmitter<string> = new EventEmitter();
  value: string;

  constructor() {
    this.value = 'test';
  }

  ngOnInit() {
  }

  handleInput($event) {
    this.value = $event.target.value;
    this.changeInput.emit(this.value);
  }
}
