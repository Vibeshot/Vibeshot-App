export interface Comment {
    id: number;
    content: string;
    username: string;
}

export interface Post {
    title: string;
    id: number;
    content: string;
    username: string;
    likes: number;
    comments: Comment[];
}