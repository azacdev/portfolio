import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "../themeContext/ThemeProvider";
import "./Footer.css";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer
      className={` ${
        theme ? "bg-light text-color-light" : "bg-dark text-color-dark"
      } footer`}
    >
      <div className="footer__container container">
        <h1 className="footer__title">Abdulrazak</h1>

        <ul className="footer__list">
          <li>
            <a
              href="#about"
              className={`${
                theme ? "text-color-light" : "text-color-dark"
              } footer__link`}
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className={`${
                theme ? "text-color-light" : "text-color-dark"
              } footer__link`}
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className={`${
                theme ? "text-color-light" : "text-color-dark"
              } footer__link`}
            >
              Projects
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://github.com/azacdev"
            className={`${
              theme ? "text-color-light" : "text-color-dark"
            } github`}
            target="blank"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/azacdev/"
            className={`${
              theme ? "text-color-light" : "text-color-dark"
            } linkedin`}
            target="blank"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://twitter.com/azacdev"
            className={`${
              theme ? "text-color-light" : "text-color-dark"
            } twitter`}
            target="blank"
          >
            <FaTwitter />
          </a>
        </div>

        <span className="footer__copy">
          &#169; Azacdev. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
