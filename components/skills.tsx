"use client";

import { motion } from "framer-motion";
import GradualSpacing from "@/components/ui/gradual-spacing";

interface SkillProps {
  name: string;
  x: string;
  y: string;
}

const Skill = ({ name, x, y }: SkillProps) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full lg:font-semibold bg-dark lg:dark:bg-light md:bg-dark p-8 shadow-light cursor-pointer absolute text-dark dark:text-light font-bold px-3 py-1.5 md:py-3 md:px-6 text-sm md:text-base bg-transparent md:dark:bg-light md:dark:text-dark md:text-light"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <GradualSpacing
        className="font-display text-center text-4xl font-bold tracking-[-0.1em] text-black dark:text-white md:text-7xl md:leading-[5rem] mb-8 mb:mb-16 "
        text="Skills"
      />
      <div className="font-bold h-[50vh] md:h-[60vh] lg:h-screen relative flex items-center justify-center rounded-full bg-circularLightSm dark:bg-circularDarkSm sm:bg-circularLightMd sm:dark:bg-circularDarkMd lg:bg-circularLight dark:lg:bg-circularDark">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light dark:text-dark dark:bg-light lg:p-8 shadow-light cursor-pointer p-2 text-xs sm:p-4 md:p-6 md:text-base"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>

        <Skill name="HTML" x="-20vw" y="2vw" />
        <Skill name="CSS" x="15vw" y="-10vw" />
        <Skill name="Javascript" x="20vw" y="2vw" />
        <Skill name="Tailwind" x="0vw" y="17vw" />
        <Skill name="React" x="-14vw" y="-14vw" />
        <Skill name="NextJS" x="-15vw" y="12vw" />
        <Skill name="Redux" x="32vw" y="-5vw" />
        <Skill name="MUI" x="28vw" y="10vw" />
        <Skill name="ChakraUI" x="-25vw" y="17vw" />
        <Skill name="ShadCN" x="0vw" y="-22vw" />
        <Skill name="Firebase" x="0vw" y="-13vw" />
        <Skill name="Node" x="-25vw" y="-18vw" />
        <Skill name="Express" x="18vw" y="-18vw" />
        <Skill name="MongoDB" x="-30vw" y="-7vw" />
        <Skill name="Prisma" x="18vw" y="13vw" />
      </div>
    </>
  );
};

export default Skills;
