import { navLinks } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import NavButton from "./NavButton";
import { logo } from "@/lib/assets";

export default function Header() {
  return (
    <header>
      <div className="fixed w-full top-0 left-0 bg-transparent backdrop-blur-sm border-none z-50">
        <div className="px-4 sm:px-10 py-6 flex items-center justify-center md:justify-between ">
          <Link
            className=" hidden md:flex items-center w-96 pr-5 lg:pr-7 xl:pr-10 max-lg:py-4"
            href="/"
          >
            <Image src={logo} alt="Imaginarium" width={60} height={60} />
            <h1 className="text-white text-xl">Imaginarum</h1>
          </Link>
          <nav className="flex ">
            <div className="relative flex items-center justify-center">
              {navLinks.map((link) => (
                <NavButton
                  key={link.id}
                  text={link.title}
                  href={link.url}
                  hasBg={link.title === "Start" ? true : false}
                  className=""
                />
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
