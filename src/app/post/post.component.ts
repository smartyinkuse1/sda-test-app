import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post, PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  posts: Post[] = []
  constructor(private postSrv: PostService) { }

  ngOnInit(): void {
    // console.log(this.posts);
    this.posts = this.postSrv.getAllPosts()
    // console.log(this.posts)
  }

  onSubmitSampleForm(form: NgForm) {
    console.log(form, "Template form");
    let value = form.value;
    console.log(value);
    this.postSrv.createPost(value)
  }

}
