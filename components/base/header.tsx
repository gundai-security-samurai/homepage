import Link from "next/link";
import Container from "../layout/container";
import Logo from "./logo";
import Navigation from "./navigation";

const Header = () => {
  return (
    <header className="h-16 md:h-20 bg-blue-600/20">
      <Container className="flex h-full items-center justify-between">
        <Link href="/#top">
          <Logo />
        </Link>
        <Navigation />
      </Container>
    </header>
  );
};

export default Header;
