import { Injectable } from '@angular/core';

export interface Post {
  id: number;
  title: string;
  image: string;
  description: string;
  dateCreated: Date;
}

@Injectable({
  providedIn: 'root'
})
// Communicate with a backend API,
// Pass Data between components
// Methods can be reused by any component
export class PostService {
  // Simulate a DB
  posts: Post[] = [
    {
      id: 1,
      title: 'My Best Trip',
      image: 'assets/fitness-image.jpg',
      description: 'Hello World',
      dateCreated: new Date(2022,2,10)
    },
    {
      id: 2,
      title: 'My Fun Days',
      image: 'assets/nagasaki-image.jpg',
      description: 'Hello World',
      dateCreated: new Date(2022,2,11)
    },
    {
      id: 3,
      title: 'My Crazy Days',
      image: 'assets/nagasaki-image.jpg',
      description: 'Hello World',
      dateCreated: new Date(2022,2,11)
    },

  ]
  constructor() { }

  getAllPosts() {
    // Make a Http get request to a server to retrieve all posts.
    return this.posts;
  }

  createPost(post: Post) {
    // Make a http Post request to a server to create a new post
    this.posts.push(post)
  }

  getSinglePost(id: number) {
    // Make the request to server to retrieve a single post with the specific id
    return this.posts.find(post => post.id === id)
  }
}
