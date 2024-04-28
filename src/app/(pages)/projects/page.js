import Link from "next/link";
import projects from "@/content/projects";
import ProjectCard from "@/components/ProjectCard";

function Projects() {
  return (
    <section className="py-8">
      <div className="margins flex flex-col gap-y-10">
        <div
          className="relative w-full flex items-center"
          data-aos="fade-in"
        >
          <hr className="w-full absolute -z-10" />
          <h2 className="bg-bg-1 pr-7">Projects</h2>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              link={project.link}
              github={project.github}
              name={project.name}
              description={project.description}
              aos={"fade-in-up"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
