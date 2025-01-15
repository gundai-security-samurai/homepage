import Container from "@/components/layout/container";
import { cn } from "@/libs/utils";
import { secureHeapUsed } from "crypto";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <section className="flex flex-col py-8">
        <Container maxWidth="lg" className="mx-auto px-4">
        <div className="flex justify-end">
            <h1 className="text-6xl font-bold mt-10">
              Project
            </h1>
        </div>
        </Container>
        <Container maxWidth="sm" className="bg-white mx-auto px-4 p-8 rounded-lg shadow-lg">
        <div className="flex flex-col">
          <h1 className="h-20 text-4xl font-bold">
            Services  
          </h1>
          <div className="relative border border-black p-4 rounded-lg  max-w-xl item-center mx-auto">
            <h1 className="text-3xl text-center">
            GITY
            </h1>
            <ul className="text-center">
            <p>群馬県前橋市にあるIT学生と企業の繋がりの場となり、</p><p>群馬県全体の発展につながるための空間</p>
            </ul>
            <ul className="text-end text-sm">
              HP:https://www.gity.co.jp/

            </ul>
          </div>
          <div className="item-center mx-auto">
            <ul className="h-16 font-bold text-6xl">
              +
            </ul>
          </div>
          <div className="relative h-32 mx-auto w-96 item-center">
            <Image fill src="/gityapp3.png" alt="gityapp" className="object-contain" />
          </div>
          <div className="flex flex-col">
            <h1 className="h-32 text-xl text-center">
              <p>コミュニティサロン"GITY"の利用をより便利に</p>
              <p>そして安心なものにするために</p>
            </h1>
          </div>
        </div>
        <div className="flex flex-col item-center">
          <ul className="text-center text-bold text-2xl h-12">
            できること
          </ul>
          <div className="flex justify-center">
          <div className="relative h-32 w-40">
          </div>
            <div className="relative h-32 w-64">
              <Image fill src="/usermanagement.png" alt="management" className="object-contain" />
            </div>
            <div className="relative h-32 w-64">
              <Image fill src="/buy.png" alt="buy" className="object-contain" />
            </div>
            <div className="relative h-32 w-64">
              <Image fill src="/stock.png" alt="stock" className="object-contain" />
            </div>
            <div className="relative h-32 w-40">
            </div>
          </div>
        </div>
        </Container>
    </section>
    
  );
}
