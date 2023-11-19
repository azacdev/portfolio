"use client"

import { useEffect, useState } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';

const ScrollUp = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY >= 560);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      onClick={scrollToTop}
      className={`scrollup fixed right-4 md:right-6 lg:right-10 bottom-[-20%] flex items-center text-xl p-4 button-primary text-white cursor-pointer opacity-80 transition-all duration-200  z-40 ${
        showScroll ? 'bottom-[4rem]' : ''
      }`}
    >
      <AiOutlineArrowUp className="text-lg lg:text-2xl" />
    </div>
  );
};

export default ScrollUp;
