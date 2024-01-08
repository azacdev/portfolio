"use client";

import { GithubIcon } from "@/components/icons";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ProjectsProps {
  src: StaticImageData;
  type?: string;
  link: string;
  title: string;
  summary: string;
  github: string;
}

const Projects = ({
  title,
  type,
  src,
  link,
  summary,
  github,
}: ProjectsProps) => {
  const FramerImage = motion(Image);

  return (
    <article className="w-full flex-col flex items-center justify-center rounded-2xl border border-solid border-dark bg-light md:p-6 relative dark:text-light dark:bg-dark dark:border-light p-4">
      <div className="absolute top-0 -right-2 md:-right-3 -z-10 w-[101%] h-[103%] rounded-[1.5rem] bg-dark dark:bg-light " />

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={src}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <Link href={link} className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-2xl md:text-3xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>

          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold border hover:border-dark hover:bg-light hover:text-dark dark:bg-light dark:text-dark dark:hover:dark:border-light dark:hover:bg-dark dark:hover:text-light transition-all duration-300"
          >
            Visit Website
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Projects;
