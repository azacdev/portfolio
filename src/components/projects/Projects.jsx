import React from 'react'
import './Projects.css'
import IMG1 from '../../assets/orion-anime.png'
import IMG3 from '../../assets/meme-generator.png'
import IMG2 from '../../assets/bulletin.png'
import IMG4 from '../../assets/tenzies.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Orion Anime",
    github: "https://github.com/azacdev/orion-anime",
    demo: "https://orion-anime.vercel.app/"
  },
  {
    id: 2,
    image: IMG2,
    title: "Bulletin Board App",
    github: "https://github.com/azacdev/bulletin-board-app.git",
    demo: " https://azacdev.github.io/bulletin-board-app/"
  },
  { 
    id: 3,
    image: IMG3,
    title: "Meme Generator",
    github: "https://github.com/azacdev/meme-generator.git",
    demo: "https://azacdev.github.io/meme-generator/"
  },
  {
    id: 4,
    image: IMG4,
    title: "Tenzies Game",
    github: "https://github.com/azacdev/tenzies-game.git",
    demo: "https://azacdev.github.io/tenzies-game/"
  }
]

const Projects = () => {
  return (
    <section className='portfolio section' id='projects'>
      <h2 className="section__title projects">Projects</h2>
      
      <div className='portfolio__container container grid'>
        {data.map(({id, image, title, github, demo}) => {
          return (
            <article className='portfolio__item' key={id}>
              <div className="portfolio__item-image">
                <img src={image}  alt={title} className="portfolio__image"/>
              </div>
          
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='button button__flex portfolio__btn'>
                  Github 
                  <i class="uil uil-github-alt portfolio__icon"></i>
                </a>
                <a href={demo} className='button button__flex portfolio__btn'>
                  Live Demo
                  <i class="uil uil-browser portfolio__icon"></i>
              </a>
          </div>
            </article>
          )
        })
        
        }
        
      </div>
    </section>
  )
}

export default Projects