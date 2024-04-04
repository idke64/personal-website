import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Navbar() {
  return (
    <>
      <nav className="w-full h-[72px] mb-2 sticky top-0 bg-bg-1">
        {/* <div className="w-full h-1 bg-black bg-gradient-to-r from-palette-green via-palette-cyan to-palette-yellow"></div> */}
        <div className="h-full flex nav-margins items-center">
          <div className="flex justify-between w-full">
            <div className="flex gap-x-1">
              <Link
                href={"/"}
                className="text-text-1 font-semibold flex items-center justify-start "
              >
                Andy Ye
              </Link>
            </div>

            <div className="flex gap-x-5 items-center">
              <Link
                href={"/about"}
                className="navlink hover:after:opacity-100 after:duration-200 hover:after:rotate-0 after:opacity-0 after:absolute after:-bottom-1.5 after:left-[calc(50%-4.5px)] after:w-0 after:h-0 after:border-l-[6px] after:border-l-transparent after:border-b-[9px] after:border-b-palette-green after:border-r-[6px] after:border-r-transparent after:rotate-180"
              >
                About
              </Link>
              <Link
                href={"/projects"}
                className="navlink hover:after:opacity-100 after:duration-200 hover:after:rotate-0 after:opacity-0 after:absolute after:-bottom-1.5 after:left-[calc(50%-4.5px)] after:w-0 after:h-0 after:border-l-[6px] after:border-l-transparent after:border-b-[9px] after:border-b-palette-cyan after:border-r-[6px] after:border-r-transparent after:rotate-180"
              >
                Projects
              </Link>
              <Link
                href={"/resume"}
                className="navlink hover:after:opacity-100 after:duration-200 hover:after:rotate-0 after:opacity-0 after:absolute after:-bottom-1.5 after:left-[calc(50%-4.5px)] after:w-0 after:h-0 after:border-l-[6px] after:border-l-transparent after:border-b-[9px] after:border-b-palette-red after:border-r-[6px] after:border-r-transparent after:rotate-180"
              >
                Resume
              </Link>
              <Link
                href={"/contact"}
                className="navlink hover:after:opacity-100 after:duration-200 hover:after:rotate-0 after:opacity-0 after:absolute after:-bottom-1.5 after:left-[calc(50%-4.5px)] after:w-0 after:h-0 after:border-l-[6px] after:border-l-transparent after:border-b-[9px] after:border-b-palette-yellow after:border-r-[6px] after:border-r-transparent after:rotate-180"
              >
                Contact
              </Link>
              <Link href={"github.com"}>
                <FontAwesomeIcon
                  icon={faGithub}
                  className="h-6 text-text-2 hover:text-[#00000]"
                />
              </Link>
              <Link
                href={"github.com"}
                className="rounded-full  flex items-center justify-center"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="h-6 text-text-2"
                />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
