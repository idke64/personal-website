import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";
import Link from "next/link";
import projects from "@/content/projects";

export default function Home() {
  return (
    <>
      <section className="w-full h-[calc(100vh-66px)] py-8">
        <div className="margins h-full flex items-center">
          <div className="flex justify-between gap-x-16">
            <div className="flex flex-col gap-y-4 w-1/2">
              <h1 className="text-transparent bg-clip-text w-full gradient-text animate-gradient-text mini-divider">
                Hi, I'm Joe
              </h1>

              <div className="flex flex-col gap-y-2">
                <p>
                  I am currently a student at{" "}
                  <Link href="/" className="link">
                    XYZ
                  </Link>{" "}
                  studying Computer Science. I'm particularly passionate about{" "}
                  <Link href={"/"} className="link">
                    web dev
                  </Link>
                  ,{" "}
                  <Link href={"/"} className="link">
                    machine learning
                  </Link>
                  ,{" "}
                  <Link href={"/"} className="link">
                    3D graphics
                  </Link>
                  , and{" "}
                  <Link href={"/"} className="link">
                    social good
                  </Link>
                  . In my free time, I enjoy biking, ping pong, and video games.
                  This is a place for me to show off what I've been up to and
                  mess around with cool tech (mostly CSS) I find interesting.
                </p>
                <p>Thanks for stopping by!</p>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </section>
      <section className="py-8">
        <div className="margins flex flex-col gap-y-8 items-center">
          <div className="flex flex-col items-center gap-y-4">
            <h2>Projects</h2>
            <div className="w-12 h-1 rounded-full gradient-bg-r" />
          </div>

          <div className="grid grid-cols-2 gap-4">
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
          <Link
            href={"/projects"}
            className="btn-primary h-9 flex items-center justify-center"
          >
            View More
          </Link>
        </div>
      </section>
    </>
  );
}
