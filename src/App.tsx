import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Appointment from './components/Appointment'
import Stats from './components/Stats'
import Sessions from './components/Sessions'
import Treatment from './components/Treatment'
import About from './components/About'
import Doctors from './components/Doctors'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Appointment />
        <Stats />
        <Sessions />
        <Treatment />
        <About />
        <Doctors />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
