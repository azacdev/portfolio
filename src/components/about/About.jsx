import { BsFileText } from "react-icons/bs";
import { useContext } from "react";
import { ThemeContext } from "../themeContext/ThemeProvider";
import "./About.css";
import CV from "../../assets/Abdulrazak-Abubakar-(Azacdev)-CV.pdf";

const About = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section className="about section" id="about">
      <h2
        className={`${
          theme ? "text-color-light" : "text-color-dark"
        } section__title`}
      >
        About Me
      </h2>

      <div className="about__container container grid">
        <div className="about__data">
          <p
            className={`${
              theme ? "text-color-light" : "text-color-dark"
            } about__description`}
          >
            I'm a frontend engineer with a passion for creating
            intuitive user interfaces, optimizing performance for seamless user
            experiences, building scalable and efficient frontend systems that
            integrate with backend services, APIs, and databases. I'm deeply
            committed to accessibility and inclusivity and believe that
            technology has the power to connect and empower people. When I'm not
            coding, I indulge my love for video games, comics, anime and
            reading, which inspire me to think creatively and outside the box.
          </p>
        </div>

        <a
          download=""
          href={CV}
          target="_blank"
          className={`${
            theme ? "button-light" : "button-dark"
          } button button--flex`}
        >
          Download CV
          <BsFileText className="button__icon" />
        </a>
      </div>
    </section>
  );
};

export default About;
