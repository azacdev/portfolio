"use client";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@utils/motion";

const SkillsText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop}
        className="mb-10"
      >
        <h1 className="text-[40px] text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Skills
        </h1>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]"
      >
        Making Apps With Modern Technologies
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className="cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center"
      >
        Never Miss a Task, Deadline or Idea
      </motion.div>
    </div>
  );
};

export default SkillsText;
