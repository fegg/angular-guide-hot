import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  appValue: string;

  ngOnInit() {
    this.appValue = 'first';
  }

  handleChangeOtherInput(value) {
    this.appValue = value;
  }
}
