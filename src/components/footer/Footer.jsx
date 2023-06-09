import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Abdulrazak</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="footer__link">
              Projects
            </a>
          </li>
        </ul>

        <div className="footer__social">
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
        </div>

        <span className="footer__copy">
          &#169; Azacdev. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
