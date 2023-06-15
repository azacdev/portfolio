import { useContext } from "react";
import { ThemeContext } from "../themeContext/ThemeProvider";
import Social from "../home/Social";

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

        {/* <div className="footer__social">
          <a
            href="https://twitter.com/azacdev"
            className="footer__social-link"
            target="blank"
          >
            <i class="bx bxl-twitter"></i>
          </a>

          <a
            href="https://www.instagram.com/azacdev_"
            className="footer__social-link"
            target="blank"
          >
            <i class="bx bxl-instagram"></i>
          </a>

          <a
            href="https://www.facebook.com/"
            className="footer__social-link"
            target="blank"
          >
            <i class="bx bxl-facebook"></i>
          </a>
        </div> */}

        <Social/>

        <span className="footer__copy">
          &#169; Azacdev. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
