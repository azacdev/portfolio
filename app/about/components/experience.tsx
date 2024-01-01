"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "@/components/li-icon";

interface DetailsProps {
  position: string;
  company: string;
  time: string;
  address: string;
  work: string;
}

const Details = ({ position, company, time, address, work }: DetailsProps) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[80%] md:w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />

      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        viewport={{ once: true }}
      >
        <h3 className="capitalize font-bold text-lg sm:text-xl md:text-2xl">
          {position}&nbsp;{" "}
          <p className="text-gray-400 capitalize inline-block">@{company}</p>
        </h3>
        <span className="capitalize font-medium text-sm md:text-base text-gray-400 ">
          {time} | {address}
        </span>
        <p className="font-medium w-full text-sm md:text-base">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-16 md:my-32 lg:my-64">
      <h2 className="font-bold mb-16 text-4xl sm:text-6xl lg:text-8xl lg:mb-32 w-full text-center">
        Experience
      </h2>

      <div className="w-full md:w-[90%] lg:w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          ref={ref}
          className="absolute w-[2px] left-[20px] md:left-[30px] lg:left-9 top-0 lg:-w-[4px] h-full bg-dark dark:bg-light origin-top"
        />

        <ul className="w-full flex flex-col items-center justify-between ml-2 sm:ml-4">
          <Details
            position="Frontend Developer"
            company="Engausa"
            time="2021-2022"
            address=" Kano, Kano"
            work="In my role as a web developer, I crafted websites using the classic trio of HTML, CSS, and JavaScript. I played a key role in weaving together visually appealing and interactive web experiences, adding a touch of creativity to the digital landscape."
          />

          <Details
            position="Freelance Developer"
            company="Freelance"
            time="2022-2023"
            address="Remote"
            work="During my freelance endeavors, I specialized in crafting dynamic web applications using cutting-edge technologies like React, Redux, and Firebase. I thrived in bringing clients' visions to life, delivering responsive and feature-rich solutions that leverage the power of modern front-end frameworks and real-time databases."
          />

          <Details
            position="Web Developer"
            company="Office Box"
            time="2023-2023"
            address="Kano, Kano"
            work="In my recent at role at Box, I took charge of the frontend development using Next.js, TypeScript, Tailwind CSS, and Shadcn UI in the creation of Ribbons, an innovative app enabling anonymous reporting of rape cases. Additionally, I played a pivotal role in the development of AgroSmart Tech, a platform facilitating seamless connections between buyers and sellers in the agricultural domain."
          />

          <Details
            position="Freelance Developer"
            company="Freelance"
            time="2023-Present"
            address="Remote"
            work="Dedicated to full-stack development, I excel in developing diverse web experiences, encompassing dynamic applications, dashboards, CMS, documentation pages, and sleek landing pages. My toolkit, featuring Next.js, Node.js, Express, MongoDB, Tailwind CSS, Redux, and React Native, ensures a cohesive and engaging user journey across varied projects."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
