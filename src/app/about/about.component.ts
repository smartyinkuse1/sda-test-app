import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from '../card/card.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  cardInfo: Card = {
    imgUrl: 'assets/fitness-image.jpg',
    title: 'About Info',
    description: 'This is the about component passing data to the card Component'
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  //Write the method the value
  recieveInput(value: string) {
    console.log(value);
    if (value === "home") {
      this.router.navigateByUrl("/")
    }
    if (value === "contact") {
      this.router.navigateByUrl("/contact")
    }
    return;

  }

}
