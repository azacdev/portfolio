"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";

interface AnimatedTextProps {
  title: string;
  className: string;
}

const quote = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedText = ({ title, className }: AnimatedTextProps) => {
  const session = useSession();

  console.log(session.data?.user?.email);
  
  return (
    <div
      className={`w-full mx-auto py-0 sm:py-2 flex items-center justify-center text-center overflow-hidden`}
    >
      <motion.h1
        variants={quote}
        initial="initial"
        animate="animate"
        className={cn(
          `inline-block w-full text-dark font-bold capitalize lg:text-8xl`,
          className
        )}
      >
        {title.split(" ").map((word, index) => (
          <motion.span
            variants={singleWord}
            key={word + "-" + index}
            className="inline-block"
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
