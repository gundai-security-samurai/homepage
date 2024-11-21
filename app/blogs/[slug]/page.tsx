import Markdwon from "@/components/markdown/markdown";
import { getBlogs } from "@/features/blog/api/get-blogs";
import { getContent } from "@/features/blog/api/get-content";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const blogs = await getBlogs();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export interface Props {
  params: Promise<{
    slug: string;
  }>;
}

const BlogDetailPage = async ({ params }: Props) => {
  const { slug } = await params;
  const blogs = await getBlogs();
  const blog = blogs.find((blog) => blog.slug === slug);

  if (!blog) {
    notFound();
  }

  const content = await getContent(blog.id);

  return (
    <div>
      <Markdwon text={content} />
    </div>
  );
};

export default BlogDetailPage;
