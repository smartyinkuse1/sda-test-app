import { Component, OnInit } from '@angular/core';
import { BannerCard } from '../banner-card/banner-card.model';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {
  cardLists: BannerCard[] = [
    {
      id: 1,
      title: "hello world",
      image: 'assets/nagasaki-image.jpg',
      dateCreated: new Date(2022,1,19)
    },
    {
      id: 2,
      title: "you're good sir",
      image: 'assets/fitness-image.jpg',
      dateCreated: new Date(2022,2,16)
    },
    {
      id: 3,
      title: "hi there",
      image: 'assets/nagasaki-image.jpg',
      dateCreated: new Date(2022,3,13)
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
