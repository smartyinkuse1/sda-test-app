import { Component, OnInit } from '@angular/core';
import { Card } from './home-page.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  age: number = 10
  someString: string = 'Hello world!';
  imageUrl: string = 'assets/nagasaki-image.jpg'
  imgHeight: number = 200;
  // imgWidth: number = window.innerWidth;
  buttonState: boolean = false;
  someDescription: string = 'Some Description'
  inputValue: string = "hello";

  cardInfo: Card = {
    imgUrl: 'assets/nagasaki-image.jpg',
    title: 'Home Banner Info',
    description: 'Here is some info about this application'
  }

  constructor() { }

  ngOnInit(): void {
  }

  printAge() {
    console.log(`Age is ${this.age}`);
    this.buttonState = !this.buttonState;
    if (this.buttonState) {
      this.someString = 'Hello'
    }else {
      this.someString = 'Hello world!'
    }
  }

  hoverHandler() {
    console.log("Hello World");
  }

  onHeightIncrease() {
    console.log("Hello Height");
    this.imgHeight = this.imgHeight + 5;
    if (this.imgHeight%20 === 0) {
      this.someString = this.someString + ' ' + this.imgHeight
    }
  }

  onReset() {
    this.imgHeight = 200;
    this.someString = 'Hello world!'
  }

  // Task

  // I have a button, When this  button is clicked, The height of the images increases by 5,
  // When the height is a multiple of 20, add the height of the image to the "someString" property

  // Image height is 200

  // I have another button that resets the height and someString to the initial value.

  // TASKS


  // Create a component and route the component,
  // We display a simple arithmetic question --> ( what is answer to 100+20*50 )
  // an input where the user can type the answer to the question.
  // a submit button to submit solution
  // Check if the answer is correct, if it's correct, We display A succes message to the user
  // (Bootstrap alert),
  // Wrong answer, We clear the input and display a fail message

}
