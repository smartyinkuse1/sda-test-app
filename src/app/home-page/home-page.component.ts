import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { Card } from '../card/card.model';
import { TestService } from '../test.service';
import { Person } from './home-page.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, DoCheck, OnDestroy {
  age: number = 4;
  someString: string = 'Hello world!';
  imageValue: string = 'assets/nagasaki-image.jpg'
  imgHeight: number = 200;
  // imgWidth: number = window.innerWidth;
  buttonState: boolean = false;
  someDescription: string = 'Some Description'
  inputValue: string = "hello";
  buttonValue: string = 'Click here';
  //new Class is a property.
  cardInfo: Card = {
    imgUrl: 'assets/nagasaki-image.jpg',
    title: 'Home Banner Info',
    description: 'Here is some info about this application'
  }
  timer: any;

  todaysDate: Date = new Date();
  styleBold: string = 'bold';
  stylings: string[] = ['red', 'center']
  a: number = 0.259;
  b: number = 1.3495;

  colors: string[] = ['Green', 'Blue', 'Red', 'Yellow']

  persons: Person[] = [
    {name: "Ola", age: 24},
    {name: "Tim", age: 10},
    {name: "Aloy", age: 20}
  ]
  random: string = '';
  //BTS testService

  constructor(private testService: TestService) { }

  ngOnInit(): void {
    // this.timer = setInterval(()=> {
    //     console.log("Hello");
    // }, 1000)
    // this.colors.forEach(x => )
    this.random = this.testService.getSomeRandomData()
  }

  ngDoCheck(): void {
      // Whenever there's a change to our property values;
      // It detect a change; (a function call, a property values)
      // We shouldn't do too much computations
      // console.log("Hello i'm in DoCheck");
  }


  printAge(value: number) {
    // this.newClass.name
    // this.newClass.doSomething()
    console.log(`Age is ${this.age}`);
    this.buttonState = !this.buttonState;
    if (this.buttonState) {
      this.someString = 'Hello'
    }else {
      this.someString = 'Hello world!'
    }
    this.cardInfo = {
      imgUrl: 'assets/fitness-image.jpg',
      title: 'Hello World',
      description: 'Here we go'
    }
    // this.styleBold = 'font-light';
    this.age++
  }

  hoverHandler() {
    // console.log("Hello World");
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



  // Task
  // Create a component called ImageComponent (ng g c image);
  // replace img tag with the new component.
  // Pass the imgUrl to the newly created component (ImageComponent);

  ngOnDestroy(): void {
      // Called when angular destroys a component
      console.log("I'm leaving the component");
      clearInterval(this.timer)
  }
}
