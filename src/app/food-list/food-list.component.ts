import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {
  items: number[];

  constructor() { }

  ngOnInit() {
    this.items = [1, 2];
  }

  handleInputItem() {
    this.items.push(Math.random());
  }
}
