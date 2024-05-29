export interface Comment {
    id: number;
    content: string;
    author: string;
}

export interface Post {
    id: number;
    content: string;
    author: string;
    likes: number;
    comments: Comment[];
}