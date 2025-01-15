import Link from "next/link";
const Navigation = () => {
  return (
    <nav className="space-x-12">
      <Link href="/gity_app" className="text-white text-2xl hover:underline">
        project
      </Link>
      <Link href="/members" className="text-white text-2xl hover:underline">
        Member
      </Link>
      <Link href="/blogs" className="text-white text-2xl hover:underline">
        Blog
      </Link>
    </nav>
  );
};

export default Navigation;
