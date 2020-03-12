import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-charts-pie',
  templateUrl: './charts-pie.component.html',
  styleUrls: ['./charts-pie.component.scss']
})
export class ChartsPieComponent implements OnInit {
  chart = new Chart({
    title: {
      text: 'Breakdown by energy (2016)',
      style: { fontWeight: '700', fontFamily: 'Raboto, sans-serif' }
    },
    colors: [
      '#596CB3',
      '#2DE6D5',
      '#00CBE0',
      '#00ADE0',
      '#1D8DD1',
      '#89c6f5',
      '#4581b0',
      '#1c5480'
    ],
    plotOptions: {
      pie: {
        innerSize: '55%',
        dataLabels: {
          enabled: true,
          format: '{point.percentage:.1f} %',
          connectorWidth: 0,
          padding: 5,
          connectorPadding: -30
        },
        showInLegend: true
      }
    },
    series: [
      {
        type: 'pie',
        data: [
          ['Gas', 5.2],
          ['Oil', 26.6],
          ['Coal', 20],
          ['Electrecity', 3.1],
          ['Biomass', 5.4]
        ]
      }
    ],
    legend: {},
    credits: {
      enabled: false
    }
  });

  constructor() {}

  ngOnInit(): void {}
}
