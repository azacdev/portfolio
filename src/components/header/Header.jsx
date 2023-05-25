import React, { useState } from 'react'
import './Header.css'

const Header = () => {
  /* ============ Change Background Header ============== */
  window.addEventListener("scroll", toggleScroll)
    // when the scroll is higher than 200 viewport height, add the scroll-header class to a tag with the header tag
    function toggleScroll () {
      const header = document.querySelector(".header")
      this.scrollY >= 80 
      ? header.classList.add("scroll-header")
      : header.classList.remove("scroll-header")
    }

  /* =================== Toggle Menu =================== */
  const [toggle, showMenu] = useState(false)
  const [activeNav, setActiveNav] = useState("#home")

  return (
    <header className='header'>
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          Azacdev
        </a>

        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list ">
            <li className="nav__item">
              <a 
              href="#home" 
              onClick={() => setActiveNav("#home")} 
              className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}
              >
                <li className="uil uil-estate nav__icon"></li>
                Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" onClick={() => setActiveNav("#about")} 
              className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                <li className="uil uil-user nav__icon"></li>
                About
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" onClick={() => setActiveNav("#skills")} 
              className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                <li className="uil uil-file-alt nav__icon"></li>
                Skills
              </a>
            </li>

            <li className="nav__item">
              <a href="#services"
              onClick={() => setActiveNav("#services")} 
              className={activeNav === "#services" ? "nav__link active-link" : "nav__link"}
              >
                <li className="uil uil-briefcase-alt nav__icon"></li>
                Services
              </a>
            </li>

            <li className="nav__item">
              <a href="#projects"
              onClick={() => setActiveNav("#projects")} 
              className={activeNav === "#projects" ? "nav__link active-link" : "nav__link"}>
                <li className="uil uil-scenery nav__icon"></li>
                Projects
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" 
              onClick={() => setActiveNav("#contact")} 
              className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                <li className="uil uil-message nav__icon"></li>
                Contact
              </a>
            </li>
          </ul>

          <i className="uil uil-times nav__close" onClick={() => showMenu(!toggle)}></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!toggle)}>
          <i className="uil uil-apps"></i>
        </div>

      </nav>
    </header>
  )
}

export default Header