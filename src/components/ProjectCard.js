import Image from "next/image";
import Link from "next/link";

function ProjectCard(props) {
  return (
    <div className="p-4 rounded w-full border border-transparent hover:border-[rgb(229,231,235)] hover:border duration-200 h-[482px]">
      <div className="flex flex-col gap-y-4 relative">
        <div className="w-full h-60 overflow-hidden rounded">
          {props.image ? (
            <Image
              src={props.image ? props.image : ""}
              alt="Project Image"
              className="w-full h-full object-cover hover:scale-110 duration-200"
              width={1000}
              height={1000}
            />
          ) : (
            <div className="w-full h-full bg-gray-100"></div>
          )}
        </div>
        <div className="flex flex-col gap-y-2">
          <h4>{props.name}</h4>
          <p className="h-[102px]">{props.description}</p>
          <div className="flex gap-x-3">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
