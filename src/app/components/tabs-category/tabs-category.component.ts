import { Component, OnInit } from '@angular/core';

export interface Tab {
  name: string;
  selected: boolean;
}

export interface Link {
  url: string;
  name: string;
}

export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: "app-tabs-category",
  templateUrl: "./tabs-category.component.html",
  styleUrls: ["./tabs-category.component.scss"]
})
export class TabsCategoryComponent implements OnInit {
  tabs: Array<Tab> = [
    {
      name: "Main Indicators",
      selected: true
    },
    {
      name: "Quantities",
      selected: false
    },
    {
      name: "Prices",
      selected: false
    }
  ];
  links: Array<Link> = [
    {
      url: "/#",
      name: "Market share of the largest generation in the electricity market"
    },
    {
      url: "/#",
      name: "Share of renewable energy in gross final energy consumption"
    }
  ];

  foods: Food[] = [
    { value: "steak-0", viewValue: "Steak" },
    { value: "pizza-1", viewValue: "Pizza" },
    { value: "tacos-2", viewValue: "Tacos" }
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
