import Image from "next/image";
import Link from "next/link";

import MainLayout from "@/components/main-layout";
import profilePic from "@/public/profile.webp";
import lightBulb from "@/public/miscellaneous_icons_1.svg";
import AnimatedText from "@/components/animation/animated-text";
import { LinkArrow } from "@/components/icons";
import HireMe from "@/components/hire-me";
import TransitionEffect from "@/components/animation/transition";
import Socials from "@/components/socials";

export default function Home() {
  return (
    <>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <MainLayout className="pt-8 sm:pt-12 lg:pt-0 relative overflow-hidden">
          <div className="flex flex-col md:flex-row justify-center items-center w-full gap-8">
            <div className="w-full md:hidden lg:inline-block lg:w-1/2">
              <Image
                src={profilePic}
                alt="azacdev"
                className="profilePic border-8 border-dark dark:border-light"
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col items-center self-center text-center md:text-start">
              <AnimatedText
                title="Transforming Ideas Into Reality Through Coding And Design."
                className="!text-3xl sm:!text-5xl lg:!text-6xl text-center 2xl:!text-6xl lg:!text-left dark:text-light"
              />
              <p className="my-4 text-xs sm:text-sm lg:text-base font-medium ">
                As a proficient full-stack developer, my commitment lies in
                translating concepts into cutting-edge software solutions.
                Explore my recent projects showcasing my expertise in Next.js
                and web development.
              </p>

              <Socials />
              <div className="flex items-center lg:self-start mt-2 pb-8">
                <Link
                  href="/Abdulrazak-Abubakar-(Azacdev)-CV.pdf"
                  target="_blank"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark dark:hover:dark:border-light dark:hover:bg-dark dark:hover:text-light"
                  download={true}
                >
                  Resume
                  <LinkArrow className={"w-6 ml-1"} />
                </Link>
              </div>
            </div>
          </div>
        </MainLayout>

        <HireMe />

        <div className="absolute right-8 bottom-8 hidden md:inline-block w-24">
          <Image src={lightBulb} alt="idea" className="w-full h-auto" />
        </div>
      </main>
    </>
  );
}
