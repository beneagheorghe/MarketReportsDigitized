import { Component, OnInit } from '@angular/core';

export interface Tab {
  name: string;
  url: string;
  selected: boolean;
}
export interface Icons {
  name: string;
  icon: string;
  selected: boolean;
}

@Component({
  selector: "app-head-tabs",
  templateUrl: "./head-tabs.component.html",
  styleUrls: ["./head-tabs.component.scss"]
})
export class HeadTabsComponent implements OnInit {
  tabs: Array<Tab> = [
    {
      name: "Data Hub",
      url: "/data_hub",
      selected: false
    },
    {
      name: "My Formulas",
      url: "/my_formulas",
      selected: false
    },
    {
      name: "Forecasts",
      url: "/forecasts",
      selected: false
    },
    {
      name: "Market News",
      url: "/market_news",
      selected: false
    },
    {
      name: "Statistics",
      url: "/statistics",
      selected: false
    }
  ];

  tabIcons: Array<Icons> = [
    {
      name: "Total Energy",
      icon: "fas fa-bolt",
      selected: false
    },
    {
      name: "Oil",
      icon: "fa fa-tint",
      selected: false
    },
    {
      name: "Natural Gas",
      icon: "fab fa-gripfire",
      selected: false
    },
    {
      name: "Coal",
      icon: "fas fa-cloud",
      selected: false
    },
    {
      name: "Nuclear",
      icon: "fas fa-radiation-alt",
      selected: false
    },
    {
      name: "ELECTRICITY",
      icon: "fas fa-lightbulb",
      selected: false
    },
    {
      name: "Renewables",
      icon: "fas fa-fan",
      selected: false
    },
    {
      name: "CO2 Emmisions",
      icon: "fab fa-cloudversify",
      selected: false
    }
  ];

  constructor() {}

  navigate(tab: Tab) {
    this.tabs.forEach(e => {
      e.name.toLowerCase() === tab.name.toLowerCase()
        ? (e.selected = true)
        : (e.selected = false);
    });
  }

  select(tab: Icons) {
    this.tabIcons.forEach(e => {
      e.icon.toLowerCase() === tab.icon.toLowerCase()
        ? (e.selected = true)
        : (e.selected = false);
    });
  }

  ngOnInit(): void {}
}
