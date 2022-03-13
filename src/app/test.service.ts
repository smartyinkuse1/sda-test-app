import { Injectable } from '@angular/core';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
  email: string;
  dateOfBirth?: Date;
}


@Injectable({
  providedIn: 'root'
})
export class TestService {
  // Simulation for the Backend DB
  private data: User[] = [
    {
      id: 1,
      firstName: 'Siiri',
      lastName: 'Maarja',
      image: 'assets/fitness-image.jpg',
      email: 'siiri@mail.com',
      dateOfBirth: new Date(1990,0,19)
    },
    {
      id: 2,
      firstName: 'Margo',
      lastName: 'Rauno',
      image: 'assets/fitness-image.jpg',
      email: 'margo@mail.com'
    },
  ]
  constructor() { }

  getAllProfiles() {
    // send a request to get all Users to the backend
    return [...this.data];
  }

  getProfileById(id: number) {
    return this.data.find(user => user.id == id)
  }

  getSomeRandomData() {
    return 'Hi there'
  }


}
