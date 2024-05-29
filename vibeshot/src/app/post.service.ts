import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = [
    {
      id: 1,
      content: 'This is the first post',
      author: 'John Doe',
      likes: 0,
      comments: []
    },
    {
      id: 2,
      content: 'This is the second post',
      author: 'Samuel J',
      likes: 2,
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

  addComment(postId: number, content: string, author: string): void {
    const post = this.posts.find(p => p.id === postId);
    if (post) {
      const newComment = { id: post.comments.length + 1, content, author };
      post.comments.push(newComment);
    }
  }

  constructor() { }
}
