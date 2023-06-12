import { useContext } from "react";
import { ThemeContext } from "./components/themeContext/ThemeProvider";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import Projects from "./components/projects/Projects";

const App = () => {
  const { theme } = useContext(ThemeContext);
  
  return (
    <div className={theme ? "bg-light" : "bg-dark"}>
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ScrollUp />
    </div>
  );
};

export default App;