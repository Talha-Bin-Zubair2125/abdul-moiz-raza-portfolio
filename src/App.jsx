import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Goal from './components/Goal'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Skills from './components/Skills'
import Awards from './components/Awards'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />
      <Navbar />
      <Hero />
      <About />
      <Goal />
      <Experience />
      <Projects />
      <Education />
      <Skills />
      <Awards />
      <Contact />
      <Footer />
    </>
  )
}
