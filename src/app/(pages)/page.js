"use client";

import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";
import Link from "next/link";
import projects from "@/content/projects";
import Blob from "@/components/Blob";
import AOS from "aos";
import "aos/dist/aos.css";
import "/src/aos-animations.css";
import { useEffect } from "react";

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
      <section className="w-full h-[calc(100vh-66px)] pb-8">
        <div className="margins h-full flex items-center">
          <div className="flex justify-between gap-x-20 items-center">
            <div className="flex flex-col gap-y-4 w-1/2">
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
                    XYZ
                  </Link>{" "}
                  studying Computer Science. I&apos;m particularly passionate
                  about{" "}
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
      <section className="py-8">
        <div className="margins flex flex-col gap-y-10 items-center">
          <div
            className="relative w-full flex items-center justify-center"
            data-aos="fade-in"
          >
            <hr className="w-full absolute -z-10" />
            <h2 className="bg-bg-1 px-7">Projects</h2>
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
