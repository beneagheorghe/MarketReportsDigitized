import { Component, OnInit } from '@angular/core';

export interface Tab {
  name: string;
  selected: boolean;
}

@Component({
  selector: 'app-tabs-category',
  templateUrl: './tabs-category.component.html',
  styleUrls: ['./tabs-category.component.scss']
})
export class TabsCategoryComponent implements OnInit {
  tabs: Array<Tab> = [
    {
      name: 'Main Indicators',
      selected: true
    },
    {
      name: 'Quantities',
      selected: false
    },
    {
      name: 'Prices',
      selected: false
    }
  ];
  constructor() {}

  ngOnInit(): void {}

  select(tab: Tab) {
    this.tabs.forEach(e => {
      e.name.toLowerCase() === tab.name.toLowerCase()
        ? (e.selected = true)
        : (e.selected = false);
    });
  }
}
