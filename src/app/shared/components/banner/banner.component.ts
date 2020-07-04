import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor() { }

  images: object = [
    {
      text: 'Deliciosos Ingredientes',
      image: 'https://bit.ly/38jYwtd'
    },
    {
      text: 'Comidas exquisitas',
      image: 'https://bit.ly/3iphGme'
    },
    {
      text: 'El Mejor Café',
      image: 'https://bit.ly/31vOLH8'
    }
  ];

  ngOnInit(): void {
  }

}
