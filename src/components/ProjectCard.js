import { faGithub, faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

function ProjectCard(props) {
  return (
    <div
      className="rounded w-full overflow-hidden"
      data-aos={props.aos}
    >
      <div className="flex flex-col gap-y-4 relative group">
        <div className="w-full h-72 overflow-hidden">
          {props.image ? (
            <Image
              src={props.image ? props.image : ""}
              alt="Project Image"
              className="w-full h-full object-cover"
              width={1000}
              height={1000}
            />
          ) : (
            <div className="w-full h-full bg-gray-100" />
          )}
        </div>
        <div className="group-hover:opacity-100 opacity-0 flex flex-col gap-y-2 absolute bg-gradient-to-t from-black/70 from-25% to-transparent h-full justify-end px-6 pb-5 duration-200">

          <h4 className="text-white font-extrabold translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 opacity-0 duration-300 delay-75">{props.name}</h4>
          <p className="text-white translate-y-2 text-sm group-hover:translate-y-0 group-hover:opacity-100 opacity-0 duration-300 delay-75">{props.description}</p>
          <div className="translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 opacity-0 duration-300 delay-75">
            <div className="flex gap-x-3 mt-1.5">
              {props.github && (
                <Link
                  href={props.github}
                  className=" text-white flex item-center justify-center "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon className=" h-[18px] text-white" icon={faGithubAlt} />
                </Link>
              )}
              {props.link && (
                <Link
                  href={props.link}
                  className="text-white flex item-end justify-center "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon className="h-4 text-white" icon={faArrowUpRightFromSquare} />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex gap-x-3">
        {props.github && (
          <Link
            href={props.github}
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </Link>
        )}
        {props.link && (
          <Link
            href={props.link}
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link
          </Link>
        )}
      </div> */}
    </div>
  );
}

export default ProjectCard;
