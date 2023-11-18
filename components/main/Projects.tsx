import { projectsData } from "@constants";
import ProjectsCard from "@components/sub/ProjectsCard";

const Projects = () => {
  return (
    <section
      className="max-container section flex flex-col items-center justify-center gap-3 z-20"
      id="projects"
    >
      <div className="w-full">
        <h1 className="text-[40px] text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-10">
          Projects
        </h1>

        <div className="h-full w-full flex flex-col gap-8">
          {projectsData.map((data) => (
            <ProjectsCard
              key={data.id}
              src={data.src}
              title={data.title}
              description={data.description}
              tools={data.tools}
              github={data.github}
              demo={data.demo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
