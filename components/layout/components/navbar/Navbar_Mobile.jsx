import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

function Navbar_Mobile({ navLinks, open, setOpen, socialLink }) {
  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      <div
        className="w-screen h-screen fixed top-0 right-0 p-4
      overflow-hidden pointer-events-none flex items-center justify-end z-50"
      >
        <div
          className={`flex-1 p-16 h-full max-w-[460px] bg-black-500
           text-white rounded-xl pointer-events-auto duration-300 
           flex flex-col justify-center gap-12
          ${open ? " translate-x-0 opacity-100" : " translate-x-full opacity-0"}
        
          `}
        >
          <div
            onClick={closeMenu}
            className="flex text-3xl p-1 text-black bg-white cursor-pointer
            rounded-lg absolute top-8 right-8 "
          >
            <IoIosArrowForward />
          </div>

          <div className="space-y-4">
            <p className="tag opacity-30">Menu</p>
            <div className="space-y-1">
              {navLinks.map((links, index) => (
                <Link href={links.url} key={index}>
                  <a className="block py-2 text-3xl">{links.link}</a>
                </Link>
              ))}
              <Link href="https://sujoykh.vercel.app">
                <a target="_blank" className="block py-2 text-3xl">
                  My portfolio
                </a>
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-1">
              <p className="tag opacity-30">Follow me</p>
              <div className="flex items-center gap-x-4 flex-wrap">
                {socialLink.map((links, index) => (
                  <Link href={links.url} key={index}>
                    <a className=" py-1 text-xl">{links.name}</a>
                  </Link>
                ))}
              </div>
            </div>

            <div className="">
              <p className="tag opacity-30">Mail me</p>
              <Link href="mailto:sujoykrhaldar@gmail.com">
                <a target="_blank" className="block py-2 text-xl">
                  sujoykrhaldar@gmail.com
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar_Mobile;
