import logo from './logo.svg';
import './css/styles.css'
import './css/custom.css'
import Navbar from "./components/Navbar"
import Education from "./components/Education"
import Timeline from "./components/Timeline"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Portfolio from "./components/Portfolio"
import ExperienceModals from "./components/ExperienceModals"
import Masthead from "./components/Masthead"
import useScript from "./hooks/useScript"

function App() {
  // Bootstrap core JS
  useScript("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js")
  useScript("https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js")
  // Third party plugin JS
  useScript("https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js")
  // Core theme JS
  useScript("js/scripts.js")
  // Particle Effects
  useScript("js/particles.js")
  useScript("js/app.js")
  
  return (
    <div className="App">
      <Navbar/>
      <Masthead/>
      <Education/>
      <Timeline/>
      <Portfolio/>
      <Contact/>
      <Footer/>
      <ExperienceModals/>
    </div>
  );
}

export default App;
