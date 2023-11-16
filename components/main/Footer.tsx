import { FaYoutube } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <section className="max-container section h-full bg-transparent text-gray-200 shadow-lg z-20">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full h-full flex flex-row items-center justify-between flex-wrap">
          <div className="min-w-[150px] h-auto flex flex-col items-center justify-start">
            <h3 className="font-bold text-xl">Community</h3>
            <a href="#" className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaYoutube />
              <span className="text-[15px] ml-[6px]">Blog</span>
            </a>

            <a href="https://github.com/azacdev" target="blank" className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>
            </a>

            <a href="#" className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxDiscordLogo />
              <span className="text-[15px] ml-[6px]">Discord</span>
            </a>
          </div>

          <div className="min-w-[150px] h-auto flex flex-col items-center justify-start">
            <h3 className="font-bold text-xl">Socials</h3>
            <a href="#" target="blank" className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxInstagramLogo />
              <span className="text-[15px] ml-[6px]">Instagram</span>
            </a>

            <a href="https://twitter.com/azacdev" target="blank" className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxTwitterLogo />
              <span className="text-[15px] ml-[6px]">Twitter</span>
            </a>

            <a href="https://linkedin.com/in/azacdev/" target="blank" className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">LinkedIn</span>
            </a>
          </div>

          <div className="min-w-[150px] h-auto flex flex-col items-center justify-start">
            <h3 className="font-bold text-xl">About</h3>
            <a href="#" target="blank" className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Become Sponsor</span>
            </a>

            <a href="#" target="blank" className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Learn About Me </span>
            </a>

            <a href="#" target="blank" className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">azacdev@gmail.com</span>
            </a>
          </div>
        </div>

        <div className="py-5 text-base text-center">
          &copy; Azacdev {year} Inc. All rights reserved
        </div>
      </div>
    </section>
  );
};

export default Footer;
