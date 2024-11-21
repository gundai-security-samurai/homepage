import Link from "next/link";
import Container from "../layout/container";

const Footer = () => {
  return (
    <div className="h-64 bg-zinc-200 flex items-center ">
      <Container className="space-y-8">
        <ul className="list-disc pl-6 text-2xl">
          <li>
            <Link href="/members" className="hover:underline">
              メンバー紹介
            </Link>
          </li>
          <li>
            <Link href="/blogs" className="hover:underline">
              Blog
            </Link>
          </li>
        </ul>
        <div className="border-b border-gray-500" />
        <p className="">
          Copyright © 2024 セキュリティサムライ All Rights Reserved.
        </p>
      </Container>
    </div>
  );
};

export default Footer;
