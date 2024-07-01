import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/sections/hero"));
const About = dynamic(() => import("@/components/sections/about"));
const Projects = dynamic(() => import("@/components/sections/projects"));
const Approach = dynamic(() => import("@/components/approach"));
const Clients = dynamic(() => import("@/components/clients"));
const Experience = dynamic(() => import("@/components/sections/experience"));
const Education = dynamic(() => import("@/components/sections/education"));
const Contact = dynamic(() => import("@/components/sections/contact"));

export default function Home() {
  return (
    <main className="flex flex-col items-center text-dark w-full min-h-screen dark:text-light lg:pt-28 overflow-hidden">
      <Hero />
      <About />
      <Projects />
      <Approach />
      <Clients />
      <Experience />
      <Education />
      <Contact />
    </main>
  );
}
