import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from "../themeContext/ThemeProvider"
import { RiMenu4Line } from "react-icons/ri"
import { BiSun, BiMoon, BiHomeAlt, BiUserCircle, BiMessageDots } from "react-icons/bi"
import { MdClose,MdWebAsset  } from "react-icons/md"
import { BsGearWide } from "react-icons/bs"
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
  const { theme, setThemeMode } = useContext(ThemeContext)
  // const [darkMode, setDarkMode] = useState(theme)
  const [toggle, showMenu] = useState(false)
  const [activeNav, setActiveNav] = useState("#home")

  // useEffect(() => {
  //   setThemeMode(theme)
  // }, [theme])

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
                <BiHomeAlt className="nav__icon"/>
                Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" onClick={() => setActiveNav("#about")} 
              className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                <BiUserCircle className="nav__icon"/>
                About
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" onClick={() => setActiveNav("#skills")} 
              className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                <BsGearWide className="nav__icon"/>
                Skills
              </a>
            </li>


            <li className="nav__item">
              <a href="#projects"
              onClick={() => setActiveNav("#projects")} 
              className={activeNav === "#projects" ? "nav__link active-link" : "nav__link"}>
                <MdWebAsset className="nav__icon"/>
                Projects
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" 
              onClick={() => setActiveNav("#contact")} 
              className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                <BiMessageDots className="nav__icon"/>
                Contact
              </a>
            </li>
          </ul>

          <MdClose className="nav__close" onClick={() => showMenu(!toggle)}/>

        </div>

        <div className="nav__toggle" onClick={() => showMenu(!toggle)}>
          <RiMenu4Line/> 
        </div>

      <div className='theme-toggle'>
        <button onClick={() => setThemeMode(!theme)}>
          {theme ? <BiSun/> : <BiMoon/>}
        </button>
      </div>
      </nav>
    </header>
  )
}

export default Header