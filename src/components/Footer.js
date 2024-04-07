import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="w-full pb-6">
      <div className="flex flex-col gap-y-5 margins justify-center items-center">
        <hr className="w-full" />
        <div className="flex gap-x-4 pt-2">
          <Link href={"https://github.com/idke64/"}>
            <FontAwesomeIcon
              className="h-6 text-text-2 hover:text-text-1 duration-200"
              icon={faGithub}
            />
          </Link>
          <Link href={"https://www.instagram.com/idke644/"}>
            <FontAwesomeIcon
              className="h-6 text-text-2 hover:text-text-1 duration-200"
              icon={faInstagram}
            />
          </Link>
          <Link href={"https://www.linkedin.com/in/andy-y-392713279/"}>
            <FontAwesomeIcon
              className="h-6 text-text-2 hover:text-text-1 duration-200"
              icon={faLinkedin}
            />
          </Link>
          <Link href={"mailto:deliciousbrain42@gmail.com"}>
            <FontAwesomeIcon
              className="h-6 text-text-2 hover:text-text-1 duration-200"
              icon={faEnvelope}
            />
          </Link>
        </div>

        <p className="text-sm">Made by me for fun 🫠</p>
      </div>
    </footer>
  );
}

export default Footer;
