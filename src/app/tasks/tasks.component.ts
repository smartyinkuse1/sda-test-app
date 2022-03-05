import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  inputValue: number | string = '';
  answer: number = 25;
  correctStyle: string = 'd-none'
  wrongStyle: string = 'd-none'
  constructor() { }

  ngOnInit(): void {
  }

  onSubmitAnswer() {
    console.log(typeof this.inputValue);
    if (this.inputValue === this.answer) {
      this.correctStyle = '';
      setTimeout(() => {
        this.correctStyle = 'd-none'
        this.inputValue = ''
      }, 2000);
    } else {
      this.wrongStyle = '';
      setTimeout(() => {
        this.wrongStyle = 'd-none'
        this.inputValue = ''
      }, 2000);
    }
  }
}
