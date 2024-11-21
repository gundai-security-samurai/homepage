"use server";

import fs from "node:fs";
import path from "node:path";

export type NotionImage = {
  name: string;
  file: {
    url: string;
  };
};

export async function saveImageIfNeed(file: NotionImage): Promise<string> {
  const fileName = file.name.replaceAll(" ", "_");
  if (!isImageExist(fileName)) {
    const blob = (await getImageAsBinary(file.file.url)) as Blob;
    uploadImage(fileName, blob);
  }
  return fileName;
}

const getImageAsBinary = async (temporaryUrl: string) => {
  try {
    const blob = await fetch(temporaryUrl).then((r) => r.blob());
    return blob;
  } catch (error) {
    console.error(error);
  }
};

export const uploadImage = async (fileName: string, blob: Blob) => {
  try {
    const arrayBuffer = await blob.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const filePath = path.join(process.cwd(), "public", "images", fileName);
    fs.writeFileSync(filePath, buffer);
    console.log(`Image saved to ${filePath}`);
  } catch (error) {
    console.error("Failed to upload image:", error);
  }
};

const isImageExist = (fileName: string): boolean => {
  const filePath = path.join(process.cwd(), "public", "images", fileName);
  return fs.existsSync(filePath);
};
