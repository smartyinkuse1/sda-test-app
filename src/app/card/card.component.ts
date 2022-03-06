import { Component, Input, OnInit } from '@angular/core';
import { Card } from './card.model';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() cardValue: Card = {
    imgUrl: '',
    title: '',
    description: '',
  }
  constructor() { }

  ngOnInit(): void {
  }

}
