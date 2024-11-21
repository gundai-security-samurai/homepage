"use client";

import { type MouseEvent, useRef } from "react";

import Chip, { type ChipProps } from "@/components/data-display/chip";
import Markdwon from "@/components/markdown/markdown";
import type { BlogDetail as BlogDetailType } from "@/types/blog";
import { useSearchParams } from "next/navigation";
import BlogItem from "./blog-item";

interface Props {
  data: BlogDetailType;
}

const BlogDetail = ({ data }: Props) => {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");
  const childElement = useRef<HTMLDivElement | null>(null);

  const handleToggle = (event: MouseEvent<HTMLInputElement>) => {
    event.preventDefault();
    const details = childElement.current?.parentNode as HTMLDetailsElement;
    const content = details?.querySelector<HTMLDivElement>("summary + div");

    const closingAnimation = (content: HTMLElement) => [
      {
        height: `${content.offsetHeight}px`,
        opacity: 1,
      },
      {
        height: 0,
        opacity: 0,
      },
    ];

    const openingAnimation = (content: HTMLElement) => [
      {
        height: 0,
        opacity: 0,
      },
      {
        height: `${content.offsetHeight}px`,
        opacity: 1,
      },
    ];

    const animation = {
      duration: 300,
      easing: "ease-out",
    } satisfies KeyframeAnimationOptions;

    if (!details.open) {
      content?.animate(openingAnimation(content), animation);
      details.setAttribute("open", "true");
      return;
    }
    if (content) {
      content.animate(closingAnimation(content), animation).onfinish = () => {
        details.removeAttribute("open");
      };
      return;
    }
  };

  return (
    <div className="bg-white rounded-2xl">
      <details
        open={data.slug === slug}
        className="group overflow-hidden transition-all duration-300 ease-out min-h-20"
      >
        <summary
          className="list-none group-open:opacity-0 group-open:h-0 transition-all duration-300 cursor-pointer"
          onClick={handleToggle}
        >
          <BlogItem data={data} />
        </summary>
        <div
          className="opacity-0 group-open:opacity-100 transition-opacity duration-300 ease-in bg-white md:p-12 p-4 rounded-2xl"
          ref={childElement}
          onClick={handleToggle}
        >
          <h1 className="text-4xl font-bold">{data.title}</h1>
          <div className="flex gap-4 mt-2 mb-8 items-center">
            <p className="text-xl font-bold">{data.user.name}</p>
            <div className="flex items-center flex-wrap gap-2">
              {data.tags.map((tag) => (
                <Chip key={tag.id} color={tag.color as ChipProps["color"]}>
                  {tag.name}
                </Chip>
              ))}
            </div>
          </div>
          <Markdwon text={data.content} />
        </div>
      </details>
    </div>
  );
};

export default BlogDetail;
