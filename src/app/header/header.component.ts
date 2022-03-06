import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() answer: number | string = '';
  @Output() inputValueEvent = new EventEmitter();
  //Looks like a Custom click event


  @Output() searchEvent = new EventEmitter();

  inputValue: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onHandleSubmit(){
    console.log("Hello world", this.inputValue);
    this.inputValueEvent.emit(this.inputValue);

    this.searchEvent.emit(this.inputValue);
  }


}
