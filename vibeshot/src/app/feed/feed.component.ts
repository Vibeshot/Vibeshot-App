import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../post.service';
import { Post } from '../post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  posts: Post[] = [];
  newComment: { [key: number]: string } = {};
  createPostForm: FormGroup;

  constructor(private router: Router, private postService: PostService, private formBuilder: FormBuilder) {
    this.createPostForm = this.formBuilder.group({
      content: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  likePost(postId: number): void {
    this.postService.likePost(postId);
  }

  addComment(postId: number, author: string): void {
    if (this.newComment[postId]) {
      this.postService.addComment(postId, this.newComment[postId], author);
      this.newComment[postId] = ''; // Clear the input after adding a comment
    }
  }

  createPost(): void {
    if (this.createPostForm.invalid) {
      return;
    }

  

    const title = this.createPostForm.value.title;
    const content = this.createPostForm.value.content;
    const author = 'Current User'; // Replace with actual current user
    this.postService.createPost(title, content, author);
    this.createPostForm.reset(); // Clear the form after creating a post
  }
}
