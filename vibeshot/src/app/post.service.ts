// src/app/post.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = [
    {
      title: 'Lol',
      id: 1,
      content: 'This is the first post',
      username: 'John Doe',
      likes: 0,
      comments: []
    },
    {
      title: 'Bruh',
      id: 2,
      content: 'This is the second post',
      username: 'Jane Smith',
      likes: 0,
      comments: []
    }
  ];

  getPosts(): Observable<Post[]> {
    return of(this.posts);
  }

  likePost(postId: number): void {
    const post = this.posts.find(p => p.id === postId);
    if (post) {
      post.likes += 1;
    }
  }

  addComment(postId: number, content: string, username: string): void {
    const post = this.posts.find(p => p.id === postId);
    if (post) {
      const newComment = { id: post.comments.length + 1, content, username };
      post.comments.push(newComment);
    }
  }

  createPost(title: string, content: string, username: string): void {
    const newPost: Post = {
      id: this.posts.length + 1,
      content: content,
      username: username,
      likes: 0,
      comments: [],
      title: title
    };
    this.posts.push(newPost);
  }
}
