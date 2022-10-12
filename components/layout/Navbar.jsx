import Link from "next/link";
import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import Navbar_Desktop from "./components/navbar/Navbar_Desktop";
import Navbar_Mobile from "./components/navbar/Navbar_Mobile";

const navLinks = [
  {
    link: "Home",
    url: "/",
  },

  {
    link: "About",
    url: "/about",
  },
];

const socialLinks = [
  {
    name: "facebook",
    url: "",
  },
  {
    name: "Instagram",
    url: "",
  },
  {
    name: "Linkedin",
    url: "",
  },
  {
    name: "Github",
    url: "",
  },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  const openModel = () => {
    setOpen(true);
  };
  return (
    <>
      <header className="absolute w-full top-0 z-[50] py-8">
        <div className="container flex items-center justify-between gap-4 ">
          <Link href="/">
            <p className="font-bold text-white cursor-pointer">Next Tailwind</p>
          </Link>

          <div className="flex items-center justify-between gap-2">
            <Navbar_Desktop navLinks={navLinks} />

            <div
              onClick={openModel}
              className="flex text-3xl text-white cursor-pointer
            p-1 rounded-lg hover:bg-white-50"
            >
              <RiMenu3Fill />
            </div>
          </div>
        </div>
      </header>

      <Navbar_Mobile
        navLinks={navLinks}
        open={open}
        setOpen={setOpen}
        socialLink={socialLinks}
      />
    </>
  );
}

export default Navbar;
