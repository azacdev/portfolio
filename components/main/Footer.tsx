import { FaYoutube, FaBlog } from "react-icons/fa";
import {
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="max-container section h-full text-gray-200 shadow-lg">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full h-full flex flex-col md:flex-row items-center justify-between gap-8 z-20">
          <div className="flex flex-col items-center justify-center">
            <h3 className="font-bold text-xl">Community</h3>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="flex flex-row items-center my-[15px] cursor-pointer hover:scale-110">
              <FaYoutube />
              <span className="text-[15px] ml-[6px]">Youtube</span>
            </a>

            <a href="https://github.com/azacdev" target="blank" className="flex flex-row items-center my-[15px] cursor-pointer hover:scale-110">
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>
            </a>

            <a href="#" className="flex flex-row items-center my-[15px] cursor-pointer hover:scale-110">
              <FaBlog />
              <span className="text-[15px] ml-[6px]">Blog</span>
            </a>
          </div>

          <div className="flex flex-col items-center justify-center">
            <h3 className="font-bold text-xl">Socials</h3>
            <a href="#" className="flex flex-row items-center my-[15px] cursor-pointer hover:scale-110">
              <RxInstagramLogo />
              <span className="text-[15px] ml-[6px]">Instagram</span>
            </a>

            <a href="https://twitter.com/azacdev" target="blank" className="flex flex-row items-center my-[15px] cursor-pointer hover:scale-110">
              <RxTwitterLogo />
              <span className="text-[15px] ml-[6px]">Twitter</span>
            </a>

            <a href="https://linkedin.com/in/azacdev/" target="blank" className="flex flex-row items-center my-[15px] cursor-pointer hover:scale-110">
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">LinkedIn</span>
            </a>
          </div>

          <div className="flex flex-col items-center justify-center flex-grow md:flex-grow-0">
            <h3 className="font-bold text-xl">About</h3>
            <a href="#" className="flex flex-row items-center my-[15px] cursor-pointer hover:scale-110">
              <span className="text-[15px] ml-[6px]">Become Sponsor</span>
            </a>

            <a href="#" className="flex flex-row items-center my-[15px] cursor-pointer hover:scale-110">
              <span className="text-[15px] ml-[6px]">Learn About Me </span>
            </a>

            <a href="#" className="flex flex-row items-center my-[15px] cursor-pointer hover:scale-110">
              <span className="text-[15px] ml-[6px]">azacdev@gmail.com</span>
            </a>
          </div>
        </div>

        <div className="py-5 text-base text-center">
          &copy; Azacdev {year} Inc. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
