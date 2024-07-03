"use client";

import Blob from "@/components/Blob";
import ProjectCard from "@/components/ProjectCard";
import projects from "@/content/projects";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { useEffect } from "react";
import "/src/aos-animations.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: "ease-in-sine",
      once: true,
    });
  });
  return (
    <>
      <section className="w-full h-[calc(100vh-100px)] pb-8" id="top">
        <div className="margins h-full flex items-center">
          <div className="flex justify-between gap-x-20 items-center">
            <div className="flex flex-col gap-y-4 w-1/2 max-lg:w-full">
              <div className="flex justify-start gap-x-2" data-aos="fade-in-up">
                <h1 className="text-transparent bg-clip-text gradient-text animate-gradient-text">
                  Hi, I&apos;m Joe 👍
                </h1>
              </div>

              <div
                className="flex flex-col gap-y-2"
                data-aos="fade-in-up"
                data-aos-delay="200"
              >
                <p>
                  I am currently a student at{" "}
                  <Link href="/" className="link">
                    Georgia Tech
                  </Link>{" "}
                  studying Computer Science. I&apos;m particularly passionate
                  about{" "}
                  <span href={"/"} className="link">
                    web dev
                  </span>
                  ,{" "}
                  <span href={"/"} className="link">
                    machine learning
                  </span>
                  ,{" "}
                  <span href={"/"} className="link">
                    3D graphics
                  </span>
                  , and{" "}
                  <span href={"/"} className="link">
                    social good
                  </span>
                  . In my free time, I enjoy biking, ping pong, and video games.
                  This is a place for me to show off what I&apos;ve been up to
                  and mess around with cool stuff I find interesting.
                </p>
                <p>Thanks for stopping by!</p>
              </div>
            </div>
            <Blob aos="fade-in-down" />
          </div>
        </div>
      </section>
      <hr className="margins mb-4" />

      <section className="py-8" id="projects">
        <div className="margins flex flex-col gap-y-6 items-center">
          <div className="w-full flex flex-col gap-y-2">
            <div
              className="relative w-full flex items-center justify-start gap-x-3"
              data-aos="fade-in"
            >
              <div className="w-0 h-0 border-l-[15px] border-l-transparent border-b-[22.5px] border-r-[15px] border-r-transparent border-b-palette-cyan max-sm:border-l-[12px] max-sm:border-b-[18px] max-sm:border-r-[12px] mb-0.5 rotate-90" />
              <h2>Projects</h2>
            </div>
            <p>Some projects I did. Hover for more info.</p>
          </div>

          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-8">
            {projects.slice(0, 4).map((project, index) => (
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
    </>
  );
}
