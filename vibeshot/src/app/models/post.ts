export interface Post {
    id: string;
    author: string;
    content: string;
    imageUrl: string;
    createdAt: Date;
    likes: number;
    comments: number;
  }