import { Component, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  profile: any  = [];
  value: number = 0;
  form: FormGroup = {} as FormGroup;

  constructor(private router: Router) { }


  ngOnInit(): void { // Hook --> Most important hooks out of the lifeCycle hooks
    // called once when the component is instantiated or called by the browser
    // All Database/Service actions performed here
    // assign class property values
    // this.profile = databaseResult
    console.log("I'm in the onInit method");
    this.form = new FormGroup({
      email: new FormControl(''),
      suggestion: new FormControl('')
    })

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

  onSubmitForm() {
    console.log(this.form);
    let value = this.form.value;
    console.log(value);

  }

}
