import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  likes: number;
  comments: { username: string; content: string }[];
}

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  posts: Post[] = [];
  newComment: { [key: number]: string } = {};
  createPostForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createPostForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Mock posts
    this.posts = [
      {
        id: 1,
        title: 'First Post',
        content: 'This is the first post',
        author: 'User1',
        likes: 0,
        comments: []
      }
    ];
  }

  likePost(postId: number): void {
    const post = this.posts.find(p => p.id === postId);
    if (post) {
      post.likes++;
    }
  }

  addComment(postId: number): void {
    const post = this.posts.find(p => p.id === postId);
    if (post && this.newComment[postId]) {
      post.comments.push({ username: 'CurrentUser', content: this.newComment[postId] });
      this.newComment[postId] = '';
    }
  }

  createPost(): void {
    if (this.createPostForm.valid) {
      const newPost: Post = {
        id: this.posts.length + 1,
        title: this.createPostForm.value.title,
        content: this.createPostForm.value.content,
        author: 'CurrentUser',
        likes: 0,
        comments: []
      };
      this.posts.push(newPost);
      this.createPostForm.reset();
    }
  }
}
