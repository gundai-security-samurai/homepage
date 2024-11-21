import Container from "@/components/layout/container";
import { getBlogs } from "@/features/blog/api/get-blogs";
import { getContent } from "@/features/blog/api/get-content";
import BlogDetail from "@/features/blog/components/blog-detail";
import type { BlogDetail as BlogDetailType } from "@/types/blog";
import { Suspense } from "react";

const BlogsPage = async () => {
  const _blogs = await getBlogs();

  const blogs: BlogDetailType[] = await Promise.all(
    _blogs.map(async (blog) => ({
      ...blog,
      content: await getContent(blog.id),
    })),
  );

  return (
    <div className="my-48">
      <Container maxWidth="lg" className="px-0 md:px-4">
        <ul className="space-y-8">
          {blogs.map((blog) => (
            <li key={blog.id} className="" id={blog.slug}>
              <Suspense>
                <BlogDetail data={blog} />
              </Suspense>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default BlogsPage;
