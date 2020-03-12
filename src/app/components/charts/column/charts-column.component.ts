import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts-column.component.html',
  styleUrls: ['./charts-column.component.scss']
})
export class ChartsColumnComponent implements OnInit {
  constructor() {}

  chart = new Chart({
    colors: ['#0094EB'],
    title: {
      align: 'left',
      text: 'Trend over 1990 - 2016',
      style: { fontWeight: '700', fontFamily: 'Raboto, sans-serif' },
      margin: 40
    },
    xAxis: {
      type: 'category',
      labels: {
        rotation: -55,
        style: {
          fontSize: '12px',
          fontFamily: 'Raboto, sans-serif'
        }
      }
    },
    yAxis: {
      min: 0,
      max: 15000,
      tickInterval: 3750,
      title: {
        text: 'Mtoe'
      }
    },
    credits: {
      enabled: false
    },
    series: [
      {
        pointPadding: 0,
        groupPadding: 0.1,
        borderWidth: 0,
        type: 'column',
        name: 'Population',
        data: [
          ['1990', 14999],
          ['1991', 4444],
          ['1992', 5555],
          ['1993', 1327],
          ['1994', 2323],
          ['1995', 1227],
          ['1996', 1214],
          ['1997', 1232],
          ['1998', 1230],
          ['1999', 1137],
          ['2000', 1145],
          ['2001', 1152],
          ['2002', 1161],
          ['2003', 1076],
          ['2004', 1026],
          ['2005', 1036],
          ['2006', 1043],
          ['2007', 9668],
          ['2008', 9343],
          ['2009', 9333],
          ['2010', 1046],
          ['2011', 1056],
          ['2012', 1066],
          ['2013', 1073],
          ['2014', 9328],
          ['2015', 9323],
          ['2016', 9323]
        ]
      }
    ],
    legend: {
      enabled: false
    }
  });

  ngOnInit(): void {}
}
