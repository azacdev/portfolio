"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";

import {
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from "./icons";
import useThemeSwitcher from "@/hooks/use-theme-switcher";
import {
  Contact,
  Cross,
  DoorClosed,
  Home,
  LucideWorkflow,
  Menu,
  User,
  X,
} from "lucide-react";

interface CustomLinkProps {
  href: string;
  title: string;
  className: string;
}

const CustomLink = ({ href, title, className }: CustomLinkProps) => {
  const pathname = usePathname();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block w-0 bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-in-out duration-300 ${
          pathname.endsWith(href) ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [toggle, showMenu] = useState(false);

  return (
    <header className="w-full p-6 md:p-8 md-px-12 lg:px-32 md:py-8 font-medium flex justify-between items-center dark:text-light">
      <Link href="/">
        <h1 className="text-xl md:text-2xl font-bold">Azacdev</h1>
      </Link>

      <nav className="hidden md:block">
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink href="/contact" title="Contact" className="ml-4" />
      </nav>

      <nav className="items-center justify-center flex-wrap hidden md:flex">
        <motion.a
          href="https://github.com/azacdev"
          target="_blank"
          className="w-8 mr-3"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <GithubIcon />
        </motion.a>

        <motion.a
          href="https://twitter.com/azacdev"
          target="_blank"
          className="w-8 mx-3"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <TwitterIcon />
        </motion.a>

        <motion.a
          href="https://linkedin.com/in/azacdev/"
          target="_blank"
          className="w-8 mx-3"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <LinkedInIcon />
        </motion.a>

        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={`ml-3 flex items-center justify-center rounded-full p-1
          ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
          `}
        >
          {mode === "dark" ? (
            <SunIcon className={"fill-dark"} />
          ) : (
            <MoonIcon className={"fill-dark"} />
          )}
        </button>
      </nav>

      <nav className="fixed bottom-0 left-0 block md:hidden w-full rounded-tl-md rounded-tr-md shadow-lg shadow-[#2A0E61]/5 bg-light dark:bg-dark border-t border-dark dark:border-light z-10 px-6">
        {/* Mobile Nav */}
        <div className="h-12 flex items-center justify-between py-[5px] relative">
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`flex items-center justify-center rounded-full p-1 w-7
          ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
          `}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>

          <div
            className={`${
              toggle ? "bottom-0" : "bottom-[-600%]"
            } fixed left-0 right-0 w-full pt-8 px-6 pb-16 rounded-tl-3xl rounded-tr-3xl z-[60] bg-light dark:bg-dark border-t border-dark dark:border-light transition-all duration-300`}
          >
            <div className="grid grid-cols-3 gap-8 text-sm text-dark dark:text-light">
              <Link
                href="/"
                className="flex flex-col justify-center items-center gap-3 cursor-pointer hover:scale-110"
                onClick={() => showMenu(false)}
              >
                <Home />
                Home
              </Link>
              <Link
                href="/about"
                className="flex flex-col justify-center items-center gap-3 cursor-pointer hover:scale-110"
                onClick={() => showMenu(false)}
              >
                <User />
                About
              </Link>
              <Link
                href="/projects"
                className="flex flex-col justify-center items-center gap-3 cursor-pointer hover:scale-110"
                onClick={() => showMenu(false)}
              >
                <LucideWorkflow />
                Projects
              </Link>
              <Link
                href="/contact"
                className="flex flex-col justify-center items-center gap-3 cursor-pointer hover:scale-110"
                onClick={() => showMenu(false)}
              >
                <Contact />
                Contact
              </Link>
            </div>

            <X
              className="absolute right-6 bottom-2 text-3xl cursor-pointer text-dark dark:text-light"
              onClick={() => showMenu(!toggle)}
            />
          </div>

          <div className="cursor-pointer" onClick={() => showMenu(!toggle)}>
            <Menu className="text-3xl" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
