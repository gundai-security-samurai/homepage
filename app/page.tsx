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
      <Container className="w-full h-svh flex items-center justify-center">
        <div className="w-full">
          <div className="relative h-96 mx-auto">
            <Image fill src="/logo.png" alt="hero" className="object-contain" />
          </div>
          <h1 className="text-4xl font-semibold text-white text-center drop-shadow-md">
            セキュリティで、あなたをまもる。
          </h1>
        </div>
      </Container>
      <section className="bg-[#C2FFF3]/80 py-8">
      <Container>
        <div className="flex flex-col justify-start">
          <div className="relative h-16 w-32 md:h-20 md:w-64 shrink-0">
            <Image
              fill
              src="/about_header.png"
              alt="about header"
              className="object-contain"
            />
          </div>
          <ul className="w-full">
            <div className="relative h-96 mx-auto">
              <Image fill src="/icon_black.png" alt="icon" className="object-contain" />
            </div>
            <h1 className="text-4xl font-semibold text-black text-center drop-shadow-md">
              GITY利用者がもっと安心するために
            </h1>
            <h2 className="text-4xl font-semibold text-black text-center drop-shadow-md">
              <p>
                "セキュリティサムライ"は群馬大学情報学部の講義
              </p>
              <p>
                融合型PBL2「シェアオフィス内での
              </p>
              <p>
                セキュリティ課題に対するシステム実装」にて
              </p>
              <p>
                コミュニティサロンGITYのセキュリティを強化するため
              </p>
              <p>
                の制作活動をしています。
              </p>
            </h2>          
          </ul>         
        </div>
      </Container>
      </section>

      <Container>
        <section className="bg-white py-8">
          <div className="flex flex-col justify-start">
                        <div className="relative h-16 w-40 md:h-20 md:w-64 shrink-0">
              <Image
                fill
                src="/project_head.png"
                alt="project header"
                className="object-contain"
              />
            </div>
          </div>
        </section>
      </Container>
      
      <section className="bg-white py-8">
        <Container>
          <div className="flex justify-start">
            <div className="relative h-16 w-40 md:h-20 md:w-64 shrink-0">
              <Image
                fill
                src="/project_head.png"
                alt="project header"
                className="object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col item-center justify-center">
              <div className="relative h-16 w-40 md:h-20 md:w-64 shrink-0">
                <Image
                  fill
                src="/gityapp_frame.png"
                alt="frame"
                className="object-contain"
                />
                <Image
                  fill
                  src="/gityapp.png"
                  alt="gityapp"
                  className="absolute object-contain"
                />
              </div>
              <ul className="w-full">
                <h2 className="text-4xl font-semibold text-black text-start drop-shadow-md">
                <p>
                  GITYアプリは我々セキュリティサムライがGITYでの
                  お菓子の購買のセキュリティ強化を中心にGITYの利用者
                  が安心できるように開発したアプリです。
                </p>
                </h2>          
              </ul> 
              <div className="bg-white py-8">
                <Container>
                  <div className="flex justify-end">
                    <div className="relative h-16 w-32 md:h-20 md:w-64 shrink-0">
                      <Link href="/gity_app">
                        <Image
                          fill
                          src="/viewmore.png"
                          alt="viewmore"
                          className="object-contain"
                        />
                      </Link>
                    </div>                    
                  </div>
                </Container>
              </div>
            </div>
        </Container>
      </section>
      <section className="bg-white py-8">
        <Container>
          <div className="flex justify-start">
            <div className="relative h-16 w-32 md:h-20 md:w-64 shrink-0">
              <Image
                fill
                src="/member_header.png"
                alt="member header"
                className="object-contain"
              />
            </div>
          </div>
          <Container className="mx-auto p-8 bg-matcha rounded-lg shadow-lg">
            <ul className="flex flex-col">
              <div className="c-keyline-text">PO</div>
              <div className="flex items-center gap-4">
                <Link href="/members" className="flex items-center gap-4">
                  <div className="relative h-20 w-20 shrink-0 ml-12">
                    <Image
                      src="/logo.png"
                      alt="takaoka"
                      layout="fill"
                      className="object-contain"
                    />
                  </div>
                  <h2 className="text-lg font-semibold text-left ml-10">
                    高岡史弥 Humiya Takaoka
                  </h2>
                </Link>
              </div>
              <div className="c-keyline-text">SM</div>              {/* 西崎伽音 */}
              <div className="flex items-center gap-4">
                <Link href="/members" className="flex items-center gap-4">
                  <div className="relative h-20 w-20 shrink-0 ml-12">
                    <Image
                      src="/logo.png"
                      alt="nishizaki"
                      layout="fill"
                      className="object-contain"
                    />
                  </div>
                  <h2 className="text-lg font-semibold text-left ml-10">
                    西崎伽音 Kanon Nishizaki
                  </h2>
                </Link>
              </div>

              <div className="c-keyline-text">SE</div>

              {/* 青山和樹 */}
              <div className="flex items-center gap-4">
                <Link href="/members" className="flex items-center gap-4">
                  <div className="relative h-20 w-20 shrink-0 ml-12">
                    <Image
                      src="/logo.png"
                      alt="aoyama"
                      layout="fill"
                      className="object-contain"
                    />
                  </div>
                  <h2 className="text-lg font-semibold text-left ml-10">
                    青山和樹 Kazuki Aoyama
                  </h2>
                </Link>
              </div>

              {/* 澤田真梨菜 */}
              <div className="flex items-center gap-4">
                <Link href="/members" className="flex items-center gap-4">
                  <div className="relative h-20 w-20 shrink-0 ml-12">
                    <Image
                      src="/logo.png"
                      alt="sawada"
                      layout="fill"
                      className="object-contain"
                    />
                  </div>
                  <h2 className="text-lg font-semibold text-left ml-10">
                    澤田真梨菜 Marina Sawada
                  </h2>
                </Link>
              </div>

              {/* 藤田千都 */}
              <div className="flex items-center gap-4">
                <Link href="/members" className="flex items-center gap-4">
                  <div className="relative h-20 w-20 shrink-0 ml-12">
                    <Image
                      src="/logo.png"
                      alt="fujita"
                      layout="fill"
                      className="object-contain"
                    />
                  </div>
                  <h2 className="text-lg font-semibold text-left ml-10">
                    藤田千都 Chisato Fujita
                  </h2>
                </Link>
              </div>  
            </ul>
          </Container>
          <div className="flex justify-end">
            <div className="relative h-16 w-32 md:h-20 md:w-64 shrink-0">
              <Link href="/members">
                <Image
                  fill
                  src="/viewmore.png"
                  alt="viewmore"
                  className="object-contain"
                />
              </Link>
            </div>                    
          </div>
        </Container>
      </section>
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
