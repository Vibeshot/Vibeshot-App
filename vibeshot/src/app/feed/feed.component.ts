import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post.model';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css'
})
export class FeedComponent implements OnInit {
  posts: Post[] = [];
  newComment: { [key: number]: string } = {};

  constructor(private postService: PostService) {}

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
      this.newComment[postId] = '';
    }
  }


}
