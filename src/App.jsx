import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import ScrollUp from './components/scrollup/ScrollUp'
import Projects from './components/projects/Projects'
import { ThemeProvider } from './components/themeContext/ThemeProvider'

const App = () => {
  return (
    <div>
    <ThemeProvider>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </ThemeProvider>
    </div>
  )
}

export default App