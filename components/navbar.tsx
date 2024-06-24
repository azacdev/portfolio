"use client";

import Link from "next/link";
import { SetStateAction, useState } from "react";
import { Contact, Home, LucideWorkflow, Menu, User, X } from "lucide-react";

import { MoonIcon, SunIcon } from "./icons";
import useThemeSwitcher from "@/hooks/use-theme-switcher";
import { SocialIcons } from "@/components/social-icons";

interface CustomLinkProps {
  href: string;
  title: string;
  className: string;
  activeTitle: string;
  setActiveTitle: SetStateAction<any>;
}

const CustomLink = ({
  href,
  title,
  className,
  activeTitle,
  setActiveTitle,
}: CustomLinkProps) => {
  return (
    <Link
      href={href}
      className={`${className} relative group hover:bg-dark px-3 py-2 hover:text-white dark:hover:bg-light dark:hover:text-dark rounded-md transition-colors duration-200 ${
        activeTitle === title
          ? "bg-dark text-white dark:text-dark dark:bg-light"
          : ""
      }`}
      onClick={() => setActiveTitle(title)}
      aria-label={title}
    >
      {title}
    </Link>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [toggle, showMenu] = useState(false);
  const [activeTitle, setActiveTitle] = useState<string>("Home");

  const handleMobileNav = (title: string): any => {
    setActiveTitle(title);
    showMenu(false);
  };

  return (
    <>
      {/* Desktop Nav */}
      <nav className="w-full fixed top-0 justify-between items-center hidden lg:flex p-6 md:p-8 md-px-12 lg:px-16 md:py-4 font-medium bg-light dark:bg-dark border-b border-dark dark:border-light dark:text-light rounded-bl-md rounded-br-md z-50">
        <Link href="/">
          <h1 className="text-xl md:text-2xl font-bold">Azacdev</h1>
        </Link>

        <div>
          <CustomLink
            href="/#"
            title="Home"
            className="mr-2"
            activeTitle={activeTitle}
            setActiveTitle={setActiveTitle}
          />
          <CustomLink
            href="/#about"
            title="About"
            className="mx-2"
            activeTitle={activeTitle}
            setActiveTitle={setActiveTitle}
          />
          <CustomLink
            href="/#projects"
            title="Projects"
            className="mx-2"
            activeTitle={activeTitle}
            setActiveTitle={setActiveTitle}
          />
          <CustomLink
            href="/#experience"
            title="Experience"
            className="ml-2"
            activeTitle={activeTitle}
            setActiveTitle={setActiveTitle}
          />
          <CustomLink
            href="/#contact"
            title="Contact"
            className="ml-2"
            activeTitle={activeTitle}
            setActiveTitle={setActiveTitle}
          />
          <CustomLink
            href="/blog"
            title="Blog"
            className="ml-2"
            activeTitle={activeTitle}
            setActiveTitle={setActiveTitle}
          />
        </div>

        <div className="items-center justify-center flex-wrap flex">
          <SocialIcons />

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-3 flex items-center justify-center rounded-full p-1
          ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
          `}
            aria-label={`Toggle ${mode === "light" ? "dark" : "light"} mode`}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </div>
      </nav>

      <nav className="fixed bottom-0 left-0 block lg:hidden w-full rounded-tl-md rounded-tr-md shadow-lg shadow-[#2A0E61]/5 bg-light dark:bg-dark border-t border-dark dark:border-light z-10 px-6">
        {/* Mobile Nav */}
        <div className="h-12 flex items-center justify-between py-[5px] relative">
          <button
            name="toggle-theme"
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`flex items-center justify-center rounded-full p-1 w-7
          ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
          `}
            aria-label={`Toggle ${mode === "light" ? "dark" : "light"} mode`}
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
                href="#"
                className="flex flex-col justify-center items-center gap-3 cursor-pointer hover:scale-110 relative group"
                onClick={() => handleMobileNav("Home")}
              >
                <Home />
                Home
                <span
                  className={`h-[1px] inline-block w-0 bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-in-out duration-300 ${
                    activeTitle === "Home" ? "w-full" : "w-0"
                  }`}
                >
                  &nbsp;
                </span>
              </Link>
              <Link
                href="#about"
                className="flex flex-col justify-center items-center gap-3 cursor-pointer hover:scale-110 relative group"
                onClick={() => handleMobileNav("About")}
              >
                <User />
                About
                <span
                  className={`h-[1px] inline-block w-0 bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-in-out duration-300 ${
                    activeTitle === "About" ? "w-full" : "w-0"
                  }`}
                >
                  &nbsp;
                </span>
              </Link>
              <Link
                href="#projects"
                className="flex flex-col justify-center items-center gap-3 cursor-pointer hover:scale-110 relative group"
                onClick={() => handleMobileNav("Projects")}
              >
                <LucideWorkflow />
                Projects
                <span
                  className={`h-[1px] inline-block w-0 bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-in-out duration-300 ${
                    activeTitle === "Projects" ? "w-full" : "w-0"
                  }`}
                >
                  &nbsp;
                </span>
              </Link>
              <Link
                href="#experience"
                className="flex flex-col justify-center items-center gap-3 cursor-pointer hover:scale-110 relative group"
                onClick={() => handleMobileNav("Experience")}
              >
                <LucideWorkflow />
                Experience
                <span
                  className={`h-[1px] inline-block w-0 bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-in-out duration-300 ${
                    activeTitle === "Experience" ? "w-full" : "w-0"
                  }`}
                >
                  &nbsp;
                </span>
              </Link>
              <Link
                href="#contact"
                className="flex flex-col justify-center items-center gap-3 cursor-pointer hover:scale-110 relative group"
                onClick={() => handleMobileNav("Contact")}
              >
                <Contact />
                Contact
                <span
                  className={`h-[1px] inline-block w-0 bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-in-out duration-300 ${
                    activeTitle === "Contact" ? "w-full" : "w-0"
                  }`}
                >
                  &nbsp;
                </span>
              </Link>
              <Link
                href="/blog"
                className="flex flex-col justify-center items-center gap-3 cursor-pointer hover:scale-110 relative group"
                onClick={() => handleMobileNav("Blog")}
              >
                <Contact />
                Blog
                <span
                  className={`h-[1px] inline-block w-0 bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-in-out duration-300 ${
                    activeTitle === "Blog" ? "w-full" : "w-0"
                  }`}
                >
                  &nbsp;
                </span>
              </Link>
            </div>

            <X
              className="absolute right-6 bottom-2 text-3xl cursor-pointer text-dark dark:text-light"
              onClick={() => showMenu(!toggle)}
            />
          </div>

          <div className="cursor-pointer" onClick={() => showMenu(!toggle)}>
            <Menu className="h-8 w-8" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
