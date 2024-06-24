import Approach from "@/components/approach";
import Clients from "@/components/clients";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Education from "@/components/sections/education";
import Experience from "@/components/sections/experience";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";

export default function Home() {
  return (
    <>
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
    </>
  );
}
