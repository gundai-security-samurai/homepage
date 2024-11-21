import Chip, { type ChipProps } from "@/components/data-display/chip";
import { cn } from "@/libs/utils";
import type { Blog } from "@/types/blog";

interface Props {
  data: Blog;
  className?: string;
}

const BlogItem = ({ data, className }: Props) => {
  return (
    <article
      className={cn(
        "flex items-center bg-zinc-200 rounded-2xl w-full px-4 justify-between h-20 gap-2",
        className,
      )}
    >
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          {data.tags.map((tag) => (
            <Chip key={tag.id} color={tag.color as ChipProps["color"]}>
              {tag.name}
            </Chip>
          ))}
        </div>
        <p className="md:text-3xl text-xl font-bold">{data.title}</p>
      </div>
      <p className="md:text-2xl text-md shrink-0">{data.user.name}</p>
    </article>
  );
};

export default BlogItem;
