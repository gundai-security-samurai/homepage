import { getDatabase } from "@/libs/notion";
import type { Blog } from "@/types/blog";

export const getBlogs = async (): Promise<Blog[]> => {
  const database = await getDatabase(process.env.DATABASE_ID as string);
  const blogs: Blog[] = await Promise.all(
    database.map(async (blog: unknown) => await notionToBlog(blog)),
  );
  return blogs.filter((blog) => blog.public);
};

// biome-ignore lint: notion data is any
const notionToBlog = async (data: any): Promise<Blog> => ({
  id: data.id,
  title: data.properties.title.title[0].plain_text,
  slug: data.properties.slug.rich_text[0].plain_text,
  user: {
    id: data.properties.user.id,
    name: data.properties.user.people[0].name,
    image: data.properties.user.people[0].avatar_url as string,
    email: data.properties.user.people[0].person.email,
  },
  createdAt: data.properties.createdAt.date.start,
  tags: data.properties.tags.multi_select,
  public: data.properties.public.checkbox,
});
