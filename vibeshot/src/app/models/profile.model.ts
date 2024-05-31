// src/app/models/profile.model.ts
export interface Post {
    id: number;
    title: string;
    content: string;
    likes: number;
    comments: Comment[];
  }
  
  export interface Comment {
    username: string;
    content: string;
  }
  
  export interface Profile {
    id: number;
    name: string;
    bio: string;
    posts: Post[];
  }
  