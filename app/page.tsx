import Container from "@/components/layout/container";
import { getBlogs } from "@/features/blog/api/get-blogs";
import BlogItem from "@/features/blog/components/blog-item";
import { cn } from "@/libs/utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const blogs = await getBlogs();
  return (
    <div>
      <Container className="w-full h-screen flex items-center justify-center">
        <div className="w-full">
          <div className="relative h-96 mx-auto">
            <Image fill src="/logo.png" alt="hero" className="object-contain" />
          </div>
          <h1 className="text-4xl font-semibold text-white text-center drop-shadow-md">
            セキュリティで、あなたをまもる。
          </h1>
        </div>
      </Container>
      <section className="bg-white py-8">
        <Container>
          <div className="flex justify-start">
            <div className="relative h-16 w-32 md:h-20 md:w-64 shrink-0">
              <Image
                fill
                src="/blog_header.png"
                alt="blog header"
                className="object-contain"
              />
            </div>
          </div>
          <ul className="flex flex-col gap-8 mt-12">
            {blogs.map((blog, index) => (
              <li key={blog.id}>
                <Link href={`/blogs?slug=${blog.slug}#${blog.slug}`}>
                  <BlogItem
                    data={blog}
                    className={cn(index === 0 && "bg-amber-200")}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </div>
  );
}
