import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from './contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactDetails: string = '';
  contacts: Contact[] = [
    {
      name: 'Olayinka',
      phone: '12345678',
      email: 'ola@mail.com'
    },
    {
      name: 'Siiri',
      phone: '12345678',
      email: 'siiri@mail.com'
    },
    {
      name: 'Erje',
      phone: '098765431',
      email: 'erje@mail.com'

    },
    {
      name: 'Rauno',
      phone: '1234567',
      email: 'rauno@mail.com'

    }
  ]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // A method to recieve the data
  searchTermHandler(value: string) {
    // Check if the value coming from the header component is empty
    if (value.length === 0) {
      return
    }
    // Find the first contact object that has a match in the name
    const found = this.contacts.find(contact => contact.email.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
    console.log(found);
    // this.router.navigateByUrl("/about")
    if (found) {
      this.contactDetails = `The contact is ${found.name} -- ${found.phone}`
      return
    } else {
      this.contactDetails = 'Not Found'
      return
    }
  }

  onSubmitPersonalInfo(form: NgForm) {
      console.log(form, form.value);
    let value = form.value;
    // Send the object to the DB
  }











  // Write a method to recieve that particular data
  receiveChildValue(value: any) {
    console.log(value);

  }

  // [ {name: 'Ola', phone: '12345678'}, {name:'Yinka', phone: '87654321'}, ]

  // Tasks

  // I have an Array of Object in my contact component,
  // In the Header component i want to search for a name or part of a name in the array.
  // if my search term is found in the array, I display the phone number of the name found
  // If not i display not found.

}
