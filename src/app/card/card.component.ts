import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Card } from './card.model';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnChanges {
  @Input() cardValue: Card = {
    imgUrl: '',
    title: '',
    description: '',
  }
  value: number = 0
  constructor() { }

  ngOnChanges(e: SimpleChanges) {
    // Called an input binding value changes (@Input() property)
    // Do some operations with the class property.
    console.log("I'm in the Onchange hook", e);
    this.value = this.value + 1
  }

  ngOnInit(): void {
  }




}
