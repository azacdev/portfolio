import Link from "next/link";
import { CircularText } from "./icons";

const HireMe = () => {
  return (
    <div className="absolute md:fixed right-0 left-auto top-0 bottom-auto md:left-4 md:bottom-4 md:top-auto md:right-auto overflow-hidden z-10">
      <div className="w-24 md:w-48 h-auto flex items-center justify-center relative overflow-hidden">
        <CircularText className={"dark:fill-light fill-dark animate-spin-slow w-[5.7rem] md:w-auto"} />
        <Link
          href="mailto:azacdev@gmail.com"
          target="_blank"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark md:w-20 md:h-20 rounded-full font-semibold hover:bg-light hover:text-dark dark:bg-light dark:text-dark dark:hover:dark:border-light dark:hover:bg-dark dark:hover:text-light w-12 h-12 text-[10px] md:text-base"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
