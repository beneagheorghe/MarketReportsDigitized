import { Component, OnInit } from '@angular/core';

export interface Cart {
  icon: string;
  category: string;
  body: string;
  title: string;
}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  title: string = 'United Kingdom Energy News';

  carts: Array<Cart> = [
    {
      icon: 'fa fa-tint',
      category: 'Category',
      body: 'adasdasd asd ads asd asd asd asd asd as dasd asd asd asd a',
      title: 'Merge tot bine'
    },
    {
      icon: 'fa fa-tint',
      category: 'Category',
      body: 'adasdasd asd ads asd asd asd asd asd as dasd asd asd asd a',
      title: 'Merge tot bine'
    },
    {
      icon: 'fa fa-tint',
      category: 'Category',
      body: 'adasdasd asd ads asd asd asd asd asd as dasd asd asd asd a',
      title: 'Merge tot bine'
    },
    {
      icon: 'fa fa-tint',
      category: 'Category',
      body: 'adasdasd asd ads asd asd asd asd asd as dasd asd asd asd a',
      title: 'Merge tot bine'
    },
    {
      icon: 'fa fa-tint',
      category: 'Category',
      body: 'adasdasd asd ads asd asd asd asd asd as dasd asd asd asd a',
      title: 'Merge tot bine'
    },
    {
      icon: 'fa fa-tint',
      category: 'Category',
      body:
        'adasdasd asd ads asd asd asd asd asd as dasd asd asd asd a adasdasd asd ads asd asd asd asd asd as dasd asd asd asd a',
      title: 'Merge tot bine'
    },
    {
      icon: 'fa fa-tint',
      category: 'Category',
      body: 'adasdasd asd ads asd asd asd asd asd as dasd asd asd asd a',
      title: 'Merge tot bine'
    },
    {
      icon: 'fa fa-tint',
      category: 'Category',
      body: 'adasdasd asd ads asd asd asd asd asd as dasd asd asd asd a',
      title: 'Merge tot bine'
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
