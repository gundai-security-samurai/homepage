import Container from "@/components/layout/container";
import { cn } from "@/libs/utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
        <Container className="mt-[60px]">
          <div className="flex justify-end">
            <div className="relative h-16 w-32 md:h-20 md:w-64 shrink-0">
              <Image
                fill
                src="/Member.png"
                alt="member"
                className="object-contain"
              />
            </div>
          </div> 
        </Container>
 
  );
}