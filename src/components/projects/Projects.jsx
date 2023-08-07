import { useContext } from "react";
import { ThemeContext } from "../themeContext/ThemeProvider";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import "./Projects.css";
import IMG1 from "../../assets/orion-anime.png";
import IMG2 from "../../assets/gadgets-dome.png";
import IMG3 from "../../assets/vega-chat.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Orion Anime",
    description:
      "An Anime Website project that allows users to explore and discover various anime shows and movies.",
    tools: "React, Redux, React-Router, React-Player, RTK Query, Tailwind, Git",
    github: "https://github.com/azacdev/orion-anime",
    demo: "https://orion-anime.vercel.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Gadgets Dome",
    description:
      "An e-commerce site that offers a variety of gadgets such as laptops, smartphones, graphics cards, and keyboards.",
    tools: "React, Tailwind CSS, React-Router, Context API, Daisy UI, Git",
    github: "https://github.com/azacdev/gadgets-dome.git",
    demo: "https://gadgets-dome.vercel.app",
  },
  {
    id: 3,
    image: IMG3,
    title: "Vega Chat",
    description:
      "A real-time chat that allows users to authenticate with their Google account and participate in live chat conversations.",
    tools:
      "React, Firebase Tailwind CSS, React-Router, Context API, Daisy UI, Git",
    github: "https://github.com/azacdev/vega-chat.git",
    demo: "https://vega-chat.vercel.app/",
  },
];

const Projects = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      className={`${
        theme ? "text-color-light" : "text-color-dark"
      } portfolio section`}
      id="projects"
    >
      <h2 className="section__title projects">Projects</h2>

      <div className="portfolio__container container grid">
        {data.map(({ id, image, title, github, demo, description, tools }) => (
          <article className="portfolio__item" key={id}>
            <div className="portfolio__item-image">
              <img
                src={image}
                alt={title}
                className="portfolio__image"
                loading="lazy"
              />
            </div>
            <div className="portfolio_item-details">
              <div className="portfolio_item-detail">
                <h3>{title}</h3>
                <p>{description}</p>
                <p>Stacks/Tools: {tools}</p>
              </div>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  target="blank"
                  className={`${
                    theme ? "text-color-light" : "text-color-dark"
                  } portfolio-btn`}
                >
                  <FaGithub className="portfolio__icon" />
                </a>
                <a
                  href={demo}
                  target="blank"
                  className={`${
                    theme ? "text-color-light" : "text-color-dark"
                  } portfolio-btn`}
                >
                  <FiExternalLink className="portfolio__icon" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
