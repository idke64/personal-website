import Link from "next/link";
import projects from "@/content/projects";
import ProjectCard from "@/components/ProjectCard";

function Projects() {
  return (
    <section className="py-8">
      <div className="margins flex flex-col gap-y-10">
        <div className="flex flex-col gap-y-4">
          <h2>Projects</h2>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              link={project.link}
              github={project.github}
              name={project.name}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
