import React from 'react'
import './ScrollUp.css'

const ScrollUp = () => {
    window.addEventListener("scroll", toggleScroll)
    // when the scroll is higher than 560 viewport height, add the show-scroll class to a tag with the scroll-top class
    function toggleScroll () {
      const scrollUp = document.querySelector(".scrollup")
      if (this.scrollY >= 560) {
        scrollUp.classList.add("show-scroll")
      }else {
        scrollUp.classList.remove("show-scroll")
      }
    }


  return (
    <a href="#" className="scrollup">
        <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  )
}

export default ScrollUp