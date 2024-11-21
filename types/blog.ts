import type { Member } from "./member";
import type { Tag } from "./tag";

export type Blog = {
  id: string;
  slug: string;
  title: string;
  user: Member;
  createdAt: string;
  tags: Tag[];
  public: boolean;
};

export type BlogDetail = Blog & {
  // cover: string;
  content: string;
};
