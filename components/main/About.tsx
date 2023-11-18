"use client";

import { motion } from "framer-motion";
import { BsFileText } from "react-icons/bs";

import { slideInFromLeft } from "@utils/motion";


const About = () => {
  return (
    <section
      className="max-container section z-20"
      id="about"
    >
      <div className="flex flex-col justify-center items-center text-center">

      <h2 className="text-[40px] text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
        About Me
      </h2>

      <motion.div
        variants={slideInFromLeft(0.8)}
        className="text-xl text-gray-400 my-2 md:my-5 max-w-[600px] flex flex-col justify-center items-center text-center"
      >
        <p className="py-4">
          I&apos;m a Software Engineer adept at creating scalable systems,
          seamlessly integrating frontend interfaces with backend services,
          APIs, and databases. I'm deeply committed to accessibility and
          inclusivity and believe that technology has the power to connect and
          empower people. When I'm not coding, I enjoy reading, watching anime,
          playing video games, and comic books, all of which encourage me to
          think creatively and outside the box.
        </p>
        <a
          download=""
          href="/Abdulrazak-Abubakar-(Azacdev)-CV.pdf"
          type="application/pdf"
          target="_blank"
          className="flex flex-row items-center text-xl py-4 px-8 mt-4 button-primary text-white cursor-pointer rounded-xl max-w-[230px]"
        >
          Download CV
          <BsFileText className="ml-2 text-2xl" />
        </a>
      </motion.div>
      </div>
    </section>
  );
};

export default About;
