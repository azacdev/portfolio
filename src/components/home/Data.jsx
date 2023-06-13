import { useContext } from "react";
import { ThemeContext } from "../themeContext/ThemeProvider";
import { LuSend } from "react-icons/lu"

const Data = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="home__data">
      <div className="home__titles">

        <h1 className={`${theme ? "text-color-light" : "text-color-dark"} home__title`}>
          H'i, I'm Abdulrazak
        </h1>
        <h3 className={`${theme ? "text-color-light" : "text-color-dark"} home__subtitle`}>
          Frontend Engineer
        </h3>
      </div>

      <div 
      className={`${theme ? "text-color-light" : "text-color-dark"} home__descriptions`}>
      <p className='home__description'>I'm a Frontend Engineer that design and build scalable and efficient frontend systems that integrate with backend services, APIs, and databases.</p>
      
      <a href="#contact"
      className={`${theme ? "button-light" : "button-dark"} button button--flex home__btn`}>
        Say Hello
        <LuSend className="button__icon"/>
      </a>
      </div>
    </div>
  )
}

export default Data