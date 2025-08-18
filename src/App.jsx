import Navbar from './components/Navbar'
import './styles/brand.css'
import './App.css'
import HeroSection from './components/HeroSection'
import Specials from './components/Specials'
import MenuPreview from './components/MenuPreview'
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <Specials />
        <MenuPreview />
        <AboutUs />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App