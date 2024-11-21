import { getPageContent } from "@/libs/notion";
import { saveImageIfNeed } from "../actions/user-image";
import type { NotionImage } from "../actions/user-image";

export const getContent = async (blogId: string): Promise<string> => {
  // biome-ignore lint: notion data is any
  const blogContent: any = await getPageContent(blogId);

  const images = blogContent.parent
    .match(/!\[[^\]]*\]\(([^)]+)\)/g)
    ?.map((imageUrl: string) =>
      imageUrl.match(/https?:\/\/[\w!?/+\-_~;.,*&@#$%()='[\]]+(?<!\))/),
    )
    // biome-ignore lint: notion data is any
    .map((image: any) => ({
      name: decodeURI(image[0].match(/[^\/]*?(\.jpeg|\.jpg|\.png|\.gif)/)[0]),
      file: { url: decodeURI(image[0]) },
    }));

  if (images) {
    const savedImages = await Promise.all(
      images.map(async (image: NotionImage) => saveImageIfNeed(image)),
    );

    savedImages.forEach((image: string, index: number) => {
      const replace = blogContent.parent.match(/!\[[^\]]*\]\(([^)]+)\)/g)[
        index
      ];
      blogContent.parent = blogContent.parent.replace(
        replace,
        `![${image}](${image})`,
      );
    });
  }

  return blogContent.parent;
};
