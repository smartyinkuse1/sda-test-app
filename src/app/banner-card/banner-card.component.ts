import { Component, Input, OnInit } from '@angular/core';
import { BannerCard } from './banner-card.model';

@Component({
  selector: 'app-banner-card',
  templateUrl: './banner-card.component.html',
  styleUrls: ['./banner-card.component.scss']
})
export class BannerCardComponent implements OnInit {
  @Input() cardData: BannerCard = {
    id: 0,
    title: '',
    image: '',
    dateCreated: new Date()
  }
  constructor() { }

  ngOnInit(): void {
  }

}
