import type { Comment } from "./Comment";

export interface Topic {
    id: number;
    username: string;
    name: string;
    categoryId: number;
    description: string;
    views: number;
    comments: Comment[];
    createdAt: string;
}