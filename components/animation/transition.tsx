"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const TransitionEffect = () => {
  const pathname = usePathname();
  return (
    <motion.div
      className="fixed top-0 bottom-0 right-full w-screen h-screen z-40 bg-[#2b2b2b] rounded-tr-3xl rounded-br-3xl"
      initial={{ x: "100%", width: "100%" }}
      animate={{ x: "0%", width: "0%" }}
      exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.div
        className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-4xl lg:text-8xl cursor-default z-50 w-fit h-fit"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {pathname.endsWith("/")
          ? "Home"
          : pathname.substring(1, 2).toUpperCase() +
            pathname.substring(2).toLowerCase()}
      </motion.div>
    </motion.div>
  );
};

export default TransitionEffect;
