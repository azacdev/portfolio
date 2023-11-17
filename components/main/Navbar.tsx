"use client";

import { useState } from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { RiMenu4Line } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";
import { BsGearWide } from "react-icons/bs";
import { MdWebAsset } from "react-icons/md";
import { BiMessageDots } from "react-icons/bi";

const Navbar = () => {
  const [toggle, showMenu] = useState(false);

  return (
    <>
      <nav className="hidden md:block w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/5 bg-[#03001417] backdrop-blur-md z-50">
        {/* Desktop Nav */}
        <div className="max-container flex h-full items-center justify-between py-[5px]">
          <a
            href="#"
            className="flex flex-row items-center text-gray-300 font-bold text-2xl"
          >
            Azacdev
          </a>

          <div className="flex items-center justify-between gap-5 h-auto text-lg font-bold border border-[#7042f861] bg-[#0300145e] mr[-15px] px-5 py[-10px] rounded-full text-gray-200">
            <a href="#about" className="text-xl cursor-pointer hover:scale-110">
              About
            </a>
            <a
              href="#skills"
              className="text-xl cursor-pointer hover:scale-110"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-xl cursor-pointer hover:scale-110"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-xl cursor-pointer hover:scale-110"
            >
              Contact
            </a>
          </div>

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
        </div>
      </nav>

      <nav className="fixed bottom-0 block md:hidden w-full rounded-tl-md rounded-tr-md shadow-lg shadow-[#2A0E61]/5 bg-[#03001417] backdrop-blur-md z-50">
        {/* Mobile Nav */}
        <div className="max-container h-12 flex items-center justify-between py-[5px]">
          <a
            href="#"
            className="flex flex-row items-center text-gray-300 font-bold text-2xl"
          >
            Azacdev
          </a>

          <div
            className={`${
              toggle ? "bottom-0" : "bottom-[-600%]"
            } fixed left-0 right-0 text-lg text-gray-200 w-full pt-8 px-6 pb-16 transition-all duration-300 border border-white rounded-tl-3xl rounded-tr-3xl shadow-lg shadow-[#2A0E61]/5 bg-[#03001417] backdrop-blur-lg z-[60]`}
          >
            <div className="grid grid-cols-3 gap-8">
              <a
                href="#about"
                className="flex flex-col justify-center items-center gap-3 cursor-pointer hover:scale-110"
              >
                <BiUserCircle className="text-2xl" />
                About
              </a>
              <a
                href="#skills"
                className="flex flex-col justify-center items-center gap-3 cursor-pointer hover:scale-110"
              >
                <BsGearWide className="text-2xl" />
                Skills
              </a>
              <a
                href="#projects"
                className="flex flex-col justify-center items-center gap-3 cursor-pointer hover:scale-110"
              >
                <MdWebAsset className="text-2xl" />
                Projects
              </a>
              <a
                href="#contact"
                className="flex flex-col justify-center items-center gap-3 cursor-pointer hover:scale-110"
              >
                <BiMessageDots className="text-2xl" />
                Contact
              </a>
            </div>

            <MdClose
              className="absolute right-6 top-0 text-3xl"
              onClick={() => showMenu(!toggle)}
            />
          </div>

          <div className="cursor-pointer" onClick={() => showMenu(!toggle)}>
            <RiMenu4Line className="text-3xl text-gray-300" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
