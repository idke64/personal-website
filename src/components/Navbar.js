"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import logo_gradient from "@/assets/logo_gradient.svg";
import logo_double from "@/assets/logo_double.svg";
import logo_black from "@/assets/logo_black.svg";
import Image from "next/image";
import logo_gray from "@/assets/logo_gray.svg";

function Navbar() {
  const route = usePathname();

  const [scrolled, setScrolled] = useState();
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav className="w-full h-[68px] sticky top-0 bg-bg-1 z-50">
        <hr
          className={`absolute bottom-0 duration-300 w-full ${
            scrolled ? "scale-x-100 origin-center" : "scale-x-0"
          }`}
        />
        {/* <div className="w-full h-1 bg-black bg-gradient-to-r from-palette-green via-palette-cyan to-palette-yellow"></div> */}
        <div className="h-full flex nav-margins items-center">
          <div className="flex justify-between w-full">
            <div className="flex gap-x-1">
              <Link
                href={"/"}
                className="text-text-3 flex items-center justify-center rounded duration-200 h-11 w-11 relative group"
              >
                <Image
                  src={logo_gradient}
                  className="h-8 w-8 hover:text-black absolute"
                />
                <Image
                  src={logo_gray}
                  className="h-8 w-8 hover:text-black z-10 absolute group-hover:opacity-0 opacity-100 duration-200"
                />
              </Link>
            </div>

            <div className="flex gap-x-5 items-center">
              <Link
                href={"/about"}
                className={`navlink hover:after:opacity-100 after:duration-200 hover:after:rotate-0 after:opacity-0 after:absolute after:-bottom-3 after:left-[calc(50%-4.5px)] after:w-0 after:h-0 after:border-l-[6px] after:border-l-transparent after:border-b-[9px] after:border-b-palette-green after:border-r-[6px] after:border-r-transparent after:rotate-180 ${
                  route === "/about" &&
                  "after:opacity-100 hover:after:rotate-180 bg-[#f1f1f1]"
                }`}
              >
                About
              </Link>
              <Link
                href={"/projects"}
                className={`navlink hover:after:opacity-100 after:duration-200 hover:after:rotate-0 after:opacity-0 after:absolute after:-bottom-3 after:left-[calc(50%-4.5px)] after:w-0 after:h-0 after:border-l-[6px] after:border-l-transparent after:border-b-[9px] after:border-b-palette-cyan after:border-r-[6px] after:border-r-transparent after:rotate-180 ${
                  route === "/projects" &&
                  "after:opacity-100 after:rotate-180 bg-[#f1f1f1]"
                }`}
              >
                Projects
              </Link>
              <Link
                href={"/resume"}
                className="navlink hover:after:opacity-100 after:duration-200 hover:after:rotate-0 after:opacity-0 after:absolute after:-bottom-3 after:left-[calc(50%-4.5px)] after:w-0 after:h-0 after:border-l-[6px] after:border-l-transparent after:border-b-[9px] after:border-b-palette-purple after:border-r-[6px] after:border-r-transparent after:rotate-180"
              >
                Resume
              </Link>
              <Link
                href={"/contact"}
                className={`navlink hover:after:opacity-100 after:duration-200 hover:after:rotate-0 after:opacity-0 after:absolute after:-bottom-3 after:left-[calc(50%-4.5px)] after:w-0 after:h-0 after:border-l-[6px] after:border-l-transparent after:border-b-[9px] after:border-b-palette-magenta after:border-r-[6px] after:border-r-transparent after:rotate-180 ${
                  route === "/contact" &&
                  "after:opacity-100 after:rotate-180 bg-[#f1f1f1]"
                }`}
              >
                Contact
              </Link>
              {/* <div className="flex gap-x-3">
                <Link
                  href={"github.com"}
                  className="h-6 w-6 bg-yellow-400 rounded-full flex items-center justify-center"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="h-5 text-yellow-400 rounded-full w-5 bg-white hover:text-[#00000]"
                  />
                </Link>
                <Link
                  href={"github.com"}
                  className="rounded-full  flex items-center justify-center"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="h-5 text-text-2"
                  />
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
