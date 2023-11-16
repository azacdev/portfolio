"use client";

import { motion } from "framer-motion";
import { GiSparkles } from "react-icons/gi";
import { LuSend } from "react-icons/lu";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const HeroContent = () => {
  const [text, setText] = useState("");
  const message = "> H'i, I'm Abdulrazak";

  useEffect(() => {
    let currentText = "";
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex === message.length) {
        clearInterval(typingInterval);
        return;
      }

      currentText += message[currentIndex];
      setText(currentText);
      currentIndex++;
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center mt-24 sm:mt-20 w-full z-20 overflow-hidden"
    >
      <div className="h-full w-full flex flex-col gap-2 sm:gap-5 justify-center m-auto items-center md:items-start text-center md:text-start">
        <motion.div
          variants={slideInFromTop}
          className="welcome-box py-[8px] px-2 border border-[#7042f88b] opacity-90"
        >
          <GiSparkles className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="welcome-text text-[13px]">Azacdev Portfolio</h1>
        </motion.div>

        <motion.div variants={slideInFromTop} className="mt-2 block md:hidden">
          <div className="flex flex-row gap-5 text-gray-300">
            <span className="text-2xl cursor-pointer hover:scale-110">
              <FaLinkedin />
            </span>
            <span className="text-2xl cursor-pointer hover:scale-110">
              <FaGithub />
            </span>
            <span className="text-2xl cursor-pointer hover:scale-110">
              <FaTwitter />
            </span>
          </div>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="mt-2 md:mt-6 text-[2rem] sm:text-4xl md:text-5xl font-bold h-auto"
        >
          <p className="hero-title inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {text}
          </p>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-xl text-gray-400 my-2 md:my-5 max-w-[600px]"
        >
          I&apos;m a Software Engineer adept at creating scalable systems,
          seamlessly integrating frontend interfaces with backend services,
          APIs, and databases.
        </motion.p>

        <motion.a
          href="#contact"
          variants={slideInFromLeft(1)}
          className="flex flex-row items-center text-xl py-4 px-8 mt-4 button-primary text-white cursor-pointer rounded-xl max-w-[230px]"
        >
          Say Hello
          <LuSend className="ml-2 text-2xl" />
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full hidden md:flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="skills-icon"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
