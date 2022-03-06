import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  @Input() image: string = '';
  age: number = 10;
  constructor() { }

  ngOnInit(): void {
  }

  someMethod(){

  }

}
