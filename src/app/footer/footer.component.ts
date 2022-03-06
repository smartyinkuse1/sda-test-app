import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  inputValue: string = '';
  @Output() inputEvent = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.inputValue);
    this.inputEvent.emit(this.inputValue);
  }

  // Tasks

  // In the footer component design an input and a search button (header)
  // Pass Data That is inputed value to the About Component
  // if the value of the data passed from the footer is "home", Redirect them to the Home Page,
  // if the value is "contact" redirect to Contact page
  // return if  not of those values

}
