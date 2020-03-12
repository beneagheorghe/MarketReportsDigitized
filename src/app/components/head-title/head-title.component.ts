import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-head-title',
  templateUrl: './head-title.component.html',
  styleUrls: ['./head-title.component.scss']
})
export class HeadTitleComponent implements OnInit {

  @Input() title: string;

  constructor() {}

  ngOnInit(): void {
    console.log(this.title);
  }
}
