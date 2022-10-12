import Link from "next/link";
import { useRouter } from "next/router";

function Navbar_Desktop({ navLinks }) {
  const router = useRouter();

  return (
    <>
      <nav className="hidden md:flex items-center justify-between gap-2">
        {navLinks.map((links, index) => (
          <Link href={links.url} key={index}>
            <a
              className={`px-6 py-2 rounded-xl text-white hover:bg-white-50 ${
                router.pathname == links.url ? "bg-white-50" : "bg-transparent"
              }`}
            >
              {links.link}
            </a>
          </Link>
        ))}
      </nav>
    </>
  );
}

export default Navbar_Desktop;
