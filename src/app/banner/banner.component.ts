import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor() { }

  images: string[] = [
    'https://bit.ly/38jYwtd',
    'https://bit.ly/3iphGme',
    'https://bit.ly/31vOLH8'
  ];

  ngOnInit(): void {
  }

}
