import { useContext } from "react";
import { ThemeContext } from "../themeContext/ThemeProvider";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3, FaReact, FaBootstrap, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiRedux, SiTailwindcss } from "react-icons/si";
import "./Skills.css";

const Skills = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section className="skills section" id="skills">
      <h2
        className={`${theme ? "text-color-light" : "text-color-dark"}
          section__title`}
      >
        Skills
      </h2>

      <div className="skills__container container grid ">
        <div
          className={`${
            theme ? "button-light" : "button-dark"
          } skills__content`}
        >
          <div className="skills__box">
            <div
              className="
            skills__group"
            >
              <div className="skills__data html__icon">
                <AiFillHtml5 className="skills__icon " />
                <div>
                  <h3 className="skills__name">HTML</h3>
                </div>
              </div>

              <div className="skills__data css__icon">
                <FaCss3 className="skills__icon" />
                <div>
                  <h3 className="skills__name">CSS</h3>
                </div>
              </div>

              <div className="skills__data javascript__icon">
                <IoLogoJavascript className="skills__icon" />
                <div>
                  <h3 className="skills__name">Javascript</h3>
                </div>
              </div>

              <div className="skills__data react__icon">
                <FaReact className="skills__icon" />
                <div>
                  <h3 className="skills__name">React</h3>
                </div>
              </div>

              <div className="skills__data redux__icon">
                <SiRedux className="skills__icon" />
                <div>
                  <h3 className="skills__name">Redux</h3>
                </div>
              </div>

              <div className="skills__data tailwind__icon">
                <SiTailwindcss className="skills__icon" />
                <div>
                  <h3 className="skills__name">Tailwind</h3>
                </div>
              </div>

              <div className="skills__data bootstrap__icon">
                <FaBootstrap className="skills__icon" />
                <div>
                  <h3 className="skills__name">Bootstrap</h3>
                </div>
              </div>

              <div className="skills__data git__icon">
                <FaGitAlt className="skills__icon" />
                <div>
                  <h3 className="skills__name">Git</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
