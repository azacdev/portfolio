"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skills } from "@constants";

const SkillsDataProvider = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.3;

  return (
    <>
      {skills.map((skill, index) => (
        <motion.div
          ref={ref}
          initial="hidden"
          variants={imageVariants}
          animate={inView ? "visible" : "hidden"}
          custom={index}
          transition={{ delay: index * animationDelay }}
          className="flex flex-col justify-center items-center gap-3"
        >
          <skill.icon className="text-[5rem] text-gray-300" />
          <span className="text-gray-300 text-xl">{skill.skill_name}</span>
        </motion.div>
      ))}
    </>
  );
};

export default SkillsDataProvider;
