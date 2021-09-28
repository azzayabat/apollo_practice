export interface Post {
  id: number;
  title: string;
  body: string;
  published: boolean;
}
export interface Db {
  posts: Post[];
}
export const db: Db = {
  posts: [{ id: 2, title: "Nexus", body: "azzyaaa", published: false }],
};
