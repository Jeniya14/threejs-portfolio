import About from './section/About'
import Contact from './section/Contact'
import Hero from './section/Hero'
import Navbar from './section/Navbar'
import Projects from './section/Projects'
import Footer from './section/Footer'
import Experience from './section/Experience'
const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      <Navbar/>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}

export default App