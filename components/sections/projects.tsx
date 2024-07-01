import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/config/data";
import MainLayout from "@/components/main-layout";
import GradualSpacing from "@/components/ui/gradual-spacing";
import { PinContainer } from "@/components/ui/pin-container";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full mb-16 flex flex-col items-center justify-center dark:text-light lg:pt-12"
    >
      <MainLayout className="pt-16">
        <GradualSpacing
          className="font-display text-center text-4xl font-bold tracking-[-0.1em] text-black dark:text-white md:text-7xl md:leading-[5rem] mb-8 mb:mb-16 "
          text="Recent Projects"
        />

        <div className="flex flex-wrap items-center justify-center p-4 gap-16 sm:gap-32 mt-10">
          {projects.map((item) => (
            <div
              className="flex items-center justify-center sm:w-96 w-[80vw] h-full"
              key={item.id}
            >
              <PinContainer
                title={item.title}
                href={item.link}
                className="text-dark dark:text-light space-y-5"
              >
                <Link href={item.link} target="_blank" className="space-y-5">
                  <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden">
                    <Image
                      src={item.img}
                      alt="cover"
                      className="rounded-md w-full h-auto"
                      width={500}
                      height={500}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                    />
                  </div>

                  <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                    {item.title}
                  </h1>

                  <p className="lg:text-xl font-normal text-sm line-clamp-2">
                    {item.des}
                  </p>

                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      {item.iconLists.map((icon, index) => (
                        <div
                          key={index}
                          className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                          style={{
                            transform: `translateX(-${5 * index + 2}px)`,
                          }}
                        >
                          <Image src={icon} alt="icon5" className="p-2" width={100} height={100}/>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-center items-center">
                      <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                        Check Live Site
                      </p>
                      <FaLocationArrow className="ms-3" color="#CBACF9" />
                    </div>
                  </div>
                </Link>
              </PinContainer>
            </div>
          ))}
        </div>
      </MainLayout>
    </section>
  );
};

export default Projects;
