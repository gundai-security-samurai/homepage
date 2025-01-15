import Container from "@/components/layout/container";
import { cn } from "@/libs/utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
        <Container className="mt-[80px]">
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
          <div className="bg-white rounded-2xl px-6 py-12">
            <h2 className="text-4xl font-bold">
              Project Member
            </h2>
            <div className="mt-8"></div>
            <h2 className="text-4xl font-semibold">
              Product Owner
            </h2>
            <div className="mt-4"></div>
            <div className="bg-neutral-300 rounded-2xl p-4 flex gap-4">
              <div className="relative w-24 h-36 mt-5">
                <Image
                 fill
                 src="/Members/Takaoka.png"
                 alt="Takaoka"
                 className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-3xl font-semibold">
                  高岡史弥
                  <span className="text-xl">
                    　群馬大学情報学部　人文情報PG
                  </span>
                </h4>
                <div className="ms-5 mt-6 text-xl grid grid-cols-[75px,10px,2fr] text-start">
                 <h5>
                  担当
                 </h5>
                 <p>
                  :
                 </p>
                 <ul>
                  <li>
                    デザイン
                  </li>
                 </ul>
                 <h5>
                  趣味
                 </h5>
                 <p>
                  :
                 </p>
                 <ul>
                  <li>
                    フォントを見ること、音楽
                  </li>
                 </ul>
                 <h5>
                  Address
                 </h5>
                 <p>
                  :
                 </p>
                 <ul>
                  <li>
                    j2200088@gunma-u.ac.jp
                  </li>
                 </ul>
                </div>
              </div>
            </div>
            <div className="mt-8">
            </div>
            <div className="bg-neutral-300 rounded-2xl p-4 flex gap-4">
              <div className="relative w-24 h-36 mt-5">
                <Image
                 fill
                 src="/Members/Takaoka.png"
                 alt="Takaoka"
                 className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
  );     
};