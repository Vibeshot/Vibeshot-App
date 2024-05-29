export interface Post {
    id: number;
    content: string;
}

export interface User {
    name: string;
    bio: string;
    posts: Post[];
}