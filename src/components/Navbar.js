"use client";

import { Link as LinkScroll } from "react-scroll";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import logo_gradient from "@/assets/logo_gradient.svg";
import logo_double from "@/assets/logo_double.svg";
import logo_white from "@/assets/logo_white.svg";
import Image from "next/image";
import logo_gray from "@/assets/logo_gray.svg";
import { faSun, faMoon, faCircle } from "@fortawesome/free-regular-svg-icons";

function Navbar() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const route = usePathname();
  const { theme, setTheme } = useTheme();
  const [firstSpin, setFirstSpin] = useState(false);
  const [secondSpin, setSecondSpin] = useState(false);

  var scrollMaxY =
    window.scrollMaxY ||
    document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

  const [scrollPosition, setScrollPosition] = useState();
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSpinTransition = () => {
    if (firstSpin) {
      setFirstSpin(false);
      if (theme === "dark") {
        setTheme("light");
      } else {
        setTheme("dark");
      }
      setSecondSpin(true);
    } else {
      setSecondSpin(false);
    }
  };

  if (!mounted) return null;

  return (
    <>
      <nav className="w-full h-[70px] sticky bg-bg-2/75 backdrop-blur-sm top-0 z-50">
        {theme === "light" && (
          <hr
            className={`absolute bottom-0 duration-300 w-full  ${
              scrollPosition > 0 ? "scale-x-100 origin-center" : "scale-x-0"
            }`}
          />
        )}
        <div className="gradient-bg-r h-[3px] w-full right-0 top-0 absolute">
          <div
            style={{ width: `${100 - (scrollPosition / scrollMaxY) * 100}%` }}
            className="bg-bg-2 h-[3px] w-full right-0 top-0 z-50 absolute"
          />
        </div>
        <div className="h-full flex nav-margins items-center">
          <div className="flex justify-between w-full">
            <div className="flex gap-x-1">
              {route === "/" ? (
                <LinkScroll
                  to="top"
                  smooth={true}
                  spy={true}
                  offset={-70}
                  duration={500}
                  className="text-text-3 flex items-center justify-center rounded duration-200 h-11 w-11 relative group cursor-pointer"
                >
                  <Image
                    alt="Logo"
                    src={theme === "dark" ? logo_white : logo_gray}
                    className="h-8 w-8 hover:text-black z-10 absolute opacity-100 duration-200"
                  />
                </LinkScroll>
              ) : (
                <Link
                  href={"/"}
                  className="text-text-3 flex items-center justify-center rounded duration-200 h-11 w-11 relative group cursor-pointer"
                >
                  <Image
                    alt="Logo"
                    src={theme === "dark" ? logo_white : logo_gray}
                    className="h-8 w-8 hover:text-black z-10 absolute opacity-100 duration-200"
                  />
                </Link>
              )}
            </div>

            <div className="flex gap-x-4 items-center">
              <LinkScroll
                to="projects"
                smooth={true}
                spy={true}
                offset={-70}
                duration={500}
                className={`navlink hover:after:opacity-100 after:duration-200 hover:after:rotate-0 after:opacity-0 after:absolute after:-bottom-3 after:left-[calc(50%-4.5px)] after:w-0 after:h-0 after:border-l-[6px] after:border-l-transparent after:border-b-[9px] after:border-b-palette-cyan after:border-r-[6px] after:border-r-transparent after:rotate-180 ${
                  route === "/projects" &&
                  "after:opacity-100 after:rotate-180 bg-[#f1f1f1]"
                }`}
              >
                Projects
              </LinkScroll>

              <LinkScroll
                to="contacts"
                smooth={true}
                spy={true}
                offset={-68}
                duration={500}
                className={`navlink hover:after:opacity-100 after:duration-200 hover:after:rotate-0 after:opacity-0 after:absolute after:-bottom-3 after:left-[calc(50%-4.5px)] after:w-0 after:h-0 after:border-l-[6px] after:border-l-transparent after:border-b-[9px] after:border-b-palette-magenta after:border-r-[6px] after:border-r-transparent after:rotate-180 ${
                  route === "/contact" &&
                  "after:opacity-100 after:rotate-180 bg-[#f1f1f1]"
                }`}
              >
                Contact
              </LinkScroll>
              <button
                className="p-2 flex justify-center rounded hover:bg-nav-hover duration-200"
                onClick={() => !firstSpin && !secondSpin && setFirstSpin(true)}
                onAnimationEnd={() => handleSpinTransition()}
              >
                <FontAwesomeIcon
                  className={`h-[20px] w-[20px] text-text-3 aspect-square ${
                    (firstSpin && "animate-spin-slow-1") ||
                    (secondSpin && "animate-spin-slow-2")
                  } text-themeicon duration-200 `}
                  icon={theme === "dark" ? faSun : faMoon}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
