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

function App() {
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
