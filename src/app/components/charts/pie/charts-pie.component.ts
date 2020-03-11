import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: "app-charts-pie",
  templateUrl: "./charts-pie.component.html",
  styleUrls: ["./charts-pie.component.scss"]
})
export class ChartsPieComponent implements OnInit {
  chart = new Chart({
    chart: {
      type: 'pie',
      renderTo: 'container'
    },
    title: {
      verticalAlign: 'middle',
      floating: true,
      text: 'CENTERED<br>TEXT'
    },
    plotOptions: {
      pie: {
        innerSize: '60%'
      }
    },

    series: [{
      data: [
        ['Firefox', 44.2],
        ['IE7', 26.6],
        ['IE6', 20],
        ['Chrome', 3.1],
        ['Other', 5.4]
      ]
    }]
  });

  constructor() {}

  ngOnInit(): void {}
}
