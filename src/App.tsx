import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Resume from './components/Resume'
import Skills from './components/Skills'
import Footer from './components/Footer'
import FeaturedProjects from './components/Project'
import Coureser from './components/Coureser'
import ZoomIn from './components/zoomin'
import WhatsAppChat from './components/icons'
import ScrollProgress from './components/scroll'
import InitiativesSection from './components/keyinitveis'
import PortfolioVideo from './components/Dna'
import ShareButton from './components/share'
import Carousel from './components/Coursel'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Carousel/>
      <PortfolioVideo/>
      <About/>
      <Skills/>
      <FeaturedProjects/>
      <InitiativesSection/>
      <Resume/>
      <Footer/>
      <Coureser/>
      <WhatsAppChat/>
      <ShareButton/>
      <ScrollProgress/>
      <ZoomIn/>
    </>
  )
}

export default App
