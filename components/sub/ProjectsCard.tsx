import Image, { StaticImageData } from "next/image";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

interface ProjectsCardProps {
  src: StaticImageData;
  title: string;
  description: string;
  tools: string;
  github: string;
  demo: string;
}

const ProjectsCard = ({
  src,
  title,
  description,
  tools,
  github,
  demo,
}: ProjectsCardProps) => {
  return (
    <div
      className="portfolio__item relative grid grid-cols-1 md:grid-cols-2 items-center gap-4 sm:gap-8 overflow-hidden shadow-lg"
    >
      <div className="portfolio__item-image">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full h-full object-contain rounded-lg"
        />
      </div>

      <div className="portfolio_item-details  relative p-4">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          <p className="text-gray-300">{description}</p>
          <p className="text-gray-300">Stacks/Tools: {tools}</p>
        </div>

        <div className="flex items-center gap-3  text-gray-300 mt-6">
          <a
            href={github}
            target="blank"
            className="cursor-pointer hover:scale-110"
          >
            <FaGithub className="text-3xl" />
          </a>
          <a
            href={demo}
            target="blank"
            className="cursor-pointer hover:scale-110"
          >
            <FiExternalLink className="text-3xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
