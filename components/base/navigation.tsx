import Link from "next/link";
const Navigation = () => {
  return (
    <nav className="space-x-12">
      <Link href="/blogs" className="text-white text-2xl hover:underline">
        Blog
      </Link>
      <Link href="/members" className="text-white text-2xl hover:underline">
        Member
      </Link>
    </nav>
  );
};

export default Navigation;
